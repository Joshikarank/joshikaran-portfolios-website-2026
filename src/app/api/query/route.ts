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
  const state = rateLimitMap.get(clientKey);

  if (!state || now - state.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientKey, {
      count: 1,
      windowStart: now,
      lastRequest: now,
    });
    return;
  }

  if (now - state.lastRequest < MIN_REQUEST_INTERVAL_MS) {
    throw new Error("Too many requests. Please wait a moment before trying again.");
  }

  state.count += 1;
  state.lastRequest = now;

  if (state.count > RATE_LIMIT_MAX_REQUESTS) {
    throw new Error("Rate limit exceeded. Try again later.");
  }
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
You are an expert AI assistant of Joshi Karan your role is to provide accurate and helpful responses about him based on question.

Your task is to answer the user's question STRICTLY using the provided context.

RULES:
- Use ONLY the information present in the context.
- Do NOT add external knowledge.
- Do NOT make assumptions or generalizations.
- If the answer is not explicitly present, respond with:
  "I don't have enough information in the provided context."
- Be precise, factual, and concise.
- Prefer exact details from context over paraphrasing.
- Do NOT provide generic advice unless explicitly supported by context.

STYLE:
- Professional and direct.
- No fluff, no filler sentences.
- Use bullet points if it improves clarity.

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

    enforceRateLimit(clientKey);

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