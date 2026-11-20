import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const MIN_REQUEST_INTERVAL_MS = 2_000;
const MAX_QUERY_LENGTH = 1200;

type RateLimitState = {
  count: number;
  windowStart: number;
  lastRequest: number;
};

const rateLimitMap = new Map<string, RateLimitState>();

function getClientKey(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function enforceRateLimit(clientKey: string) {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) rateLimitMap.delete(key);
  }
  const state = rateLimitMap.get(clientKey);

  if (!state || now - state.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientKey, {
      count: 1,
      windowStart: now,
      lastRequest: now,
    });
    return 0;
  }

  if (now - state.lastRequest < MIN_REQUEST_INTERVAL_MS) {
    return Math.ceil((MIN_REQUEST_INTERVAL_MS - (now - state.lastRequest)) / 1000);
  }

  if (state.count >= RATE_LIMIT_MAX_REQUESTS) return Math.ceil((RATE_LIMIT_WINDOW_MS - (now - state.windowStart)) / 1000);
  state.count += 1;
  state.lastRequest = now;
  return 0;
}

// ---------- embedding ----------
async function getEmbedding(text: string) {
  const res = await fetch("https://api.mistral.ai/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistral-embed",
      input: text,
    }),
  });

  const data = await res.json();
  return data.data[0].embedding;
}

// ---------- LLM ----------

async function generateAnswer(query: string, context: string) {
  const prompt = `
You are Joshi Karan's AI assistant. Help visitors learn about him with accurate, friendly, and professional answers.

Your task is to answer the user's question STRICTLY using the provided context.

RULES:
- Use ONLY the information present in the context.
- Do NOT add external knowledge.
- Do NOT make assumptions or generalizations.
- If the answer is not explicitly present, respond with:
  "I don't have enough information in the provided context."
- Be precise and factual, while providing enough detail to answer the question helpfully.
- Prefer exact details from context over paraphrasing.
- Do NOT provide generic advice unless explicitly supported by context.

STYLE:
- Be warm, approachable, and professional. Use natural, conversational language.
- Avoid sounding abrupt or dismissive, including when information is missing.
- Organize longer answers with short paragraphs and clear headings when helpful.
- Use plain text only. Do not use asterisks, Markdown formatting, or Markdown bullet points.
- When a list helps, use numbered items or separate lines with clear labels.

CONTEXT:
${context}

QUESTION:
${query}

ANSWER:
`;

  const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const data = await res.json();
  return data.choices[0].message.content;
}

// ---------- API handler ----------
export async function POST(req: Request) {
  try {
    const clientKey = getClientKey(req);
    const body = await req.json();

    if (!body || typeof body.query !== "string") {
      return NextResponse.json(
        { error: "Invalid request body; expected { query: string }." },
        { status: 400 }
      );
    }

    const query = body.query.trim();

    if (!query) {
      return NextResponse.json(
        { error: "Query cannot be empty." },
        { status: 400 }
      );
    }

    if (query.length > MAX_QUERY_LENGTH) {
      return NextResponse.json(
        { error: `Query is too long; max ${MAX_QUERY_LENGTH} characters.` },
        { status: 413 }
      );
    }

    const retryAfter = enforceRateLimit(clientKey);
    if (retryAfter > 0) {
      return NextResponse.json(
        { error: `Please wait ${retryAfter} seconds before asking another question.` },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      );
    }

    // 1. embed query
    const embedding = await getEmbedding(query);

    // 2. similarity search in Supabase
    const { data, error } = await supabase.rpc("match_documents", {
      query_embedding: embedding,
      match_count: 5,
    });

    if (error) throw error;

    // 3. build context
    const context = data.map((d: any) => d.content).join("\n");

    // 4. generate answer
    const answer = await generateAnswer(query, context);

    return NextResponse.json({ answer });

  } catch (err: any) {
    const status = err?.message?.includes("Too many requests") || err?.message?.includes("Rate limit")
      ? 429
      : 500;

    return NextResponse.json(
      { error: err.message },
      { status }
    );
  }
}
