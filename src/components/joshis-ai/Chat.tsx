"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, BriefcaseBusiness, Code2, GraduationCap, MessageCircle, Sparkles } from "lucide-react";

type Message = { role: "user" | "ai"; content: string };

const suggestions = [
  { icon: BriefcaseBusiness, label: "Experience", question: "What is Joshi's professional experience?" },
  { icon: Code2, label: "Projects", question: "Tell me about Joshi's projects." },
  { icon: Sparkles, label: "Skills", question: "What are Joshi's technical skills?" },
  { icon: GraduationCap, label: "Education", question: "What is Joshi's educational background?" },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const pending = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, [messages, loading]);

  async function sendMessage(value: string) {
    const question = value.trim();
    if (!question || pending.current) return;
    pending.current = true;
    setLoading(true);
    setMessages((previous) => [...previous, { role: "user", content: question }]);
    setQuery("");
    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question }),
      });
      const data = await response.json();
      setMessages((previous) => [...previous, { role: "ai", content: response.ok && typeof data.answer === "string" ? data.answer : data.error || "Sorry, I couldn't answer that just now. Please try again." }]);
    } catch {
      setMessages((previous) => [...previous, { role: "ai", content: "Sorry, I couldn't connect just now. Please try again." }]);
    } finally {
      pending.current = false;
      setLoading(false);
    }
  }

  return (
    <section className="flex h-[min(760px,calc(100dvh-120px))] min-h-[560px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-xl shadow-black/5" aria-label="Chat with Joshi's AI">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4 sm:px-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Sparkles className="h-5 w-5" aria-hidden="true" /></div>
        <div><h2 className="font-semibold tracking-tight">Joshi&apos;s AI</h2><p className="text-sm text-muted-foreground">Your guide to Joshi&apos;s work and experience</p></div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-7 sm:px-8" aria-live="polite" aria-relevant="additions">
        {messages.length === 0 ? (
          <div className="mx-auto flex h-full max-w-2xl flex-col justify-center py-4">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><MessageCircle className="h-6 w-6" aria-hidden="true" /></div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">Get to know Joshi</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">What would you like to know?</h1>
            <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">Ask about Joshi&apos;s experience, projects, skills, or education. Choose a question below to get started.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {suggestions.map(({ icon: Icon, label, question }) => <button key={label} type="button" disabled={loading} onClick={() => void sendMessage(question)} className="group rounded-xl border border-border p-4 text-left transition-colors hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50"><span className="flex items-center gap-2 text-sm font-semibold"><Icon className="h-4 w-4 text-primary" aria-hidden="true" />{label}</span><span className="mt-2 block text-sm leading-6 text-muted-foreground">{question}</span></button>)}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl space-y-7">
            {messages.map((message, index) => <div key={index} className={message.role === "user" ? "flex justify-end" : "flex items-start gap-3"}>
              {message.role === "ai" && <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-4 w-4" aria-hidden="true" /></div>}
              <div className={message.role === "user" ? "max-w-[85%] whitespace-pre-wrap break-words rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-base leading-7 text-primary-foreground" : "min-w-0 flex-1 pt-1"}>
                {message.role === "ai" && <p className="mb-2 text-sm font-semibold">Joshi&apos;s AI</p>}
                <div className={message.role === "ai" ? "whitespace-pre-wrap break-words text-base leading-7 text-foreground/90" : ""}>{message.content}</div>
              </div>
            </div>)}
            {loading && <div className="flex items-start gap-3" role="status"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-4 w-4" aria-hidden="true" /></div><div><p className="mb-2 text-sm font-semibold">Joshi&apos;s AI</p><span className="sr-only">Preparing a response</span><div className="flex h-6 items-center gap-1.5" aria-hidden="true"><span className="h-2 w-2 animate-bounce rounded-full bg-primary/70 [animation-delay:-0.3s] motion-reduce:animate-none" /><span className="h-2 w-2 animate-bounce rounded-full bg-primary/70 [animation-delay:-0.15s] motion-reduce:animate-none" /><span className="h-2 w-2 animate-bounce rounded-full bg-primary/70 motion-reduce:animate-none" /></div></div></div>}
            <div ref={bottomRef} />
          </div>
        )}
      </div>
      <form onSubmit={(event) => { event.preventDefault(); void sendMessage(query); }} className="border-t border-border bg-background px-5 py-4 sm:px-7">
        <div className="mx-auto max-w-2xl"><div className="flex items-end gap-3 rounded-2xl border border-border bg-background p-2 shadow-sm focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/10">
          <textarea aria-label="Ask a question about Joshi" placeholder="Ask a question about Joshi..." value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void sendMessage(query); } }} maxLength={1200} rows={1} className="max-h-32 min-h-11 flex-1 resize-y bg-transparent px-3 py-2.5 text-base leading-6 outline-none placeholder:text-muted-foreground" />
          <button type="submit" disabled={loading || !query.trim()} aria-label="Send question" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40"><ArrowUp className="h-5 w-5" aria-hidden="true" /></button>
        </div><p className="mt-2 px-1 text-xs text-muted-foreground">Enter to send · Shift + Enter for a new line</p></div>
      </form>
    </section>
  );
}
