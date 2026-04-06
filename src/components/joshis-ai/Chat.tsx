"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!query.trim() || loading) return;

    const userMessage: Message = { role: "user", content: query };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      const aiMessage: Message = {
        role: "ai",
        content: data.answer || data.error || "Something went wrong",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Server error. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="h-[80vh] flex flex-col shadow-xl border rounded-2xl">
      {/* Header */}
      <div className="p-4 border-b font-semibold text-lg flex items-center gap-2">
        🤖 Joshi's AI
      </div>

      {/* Chat Area */}
      <ScrollArea className="flex-1 p-6 space-y-6">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "ai" && (
              <Avatar>
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}

            <div
              className={`px-4 py-2 rounded-2xl text-sm max-w-[70%] ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {msg.content}
            </div>

            {msg.role === "user" && (
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {/* Loading indicator */}
        {loading && (
          <div className="text-sm text-muted-foreground animate-pulse">
            AI is thinking...
          </div>
        )}

        <div ref={bottomRef} />
      </ScrollArea>

      {/* Input */}
      <CardContent className="p-4 border-t flex gap-2">
        <Input
          placeholder="Ask about Joshi..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <Button onClick={sendMessage} disabled={loading}>
          <Send size={16} />
        </Button>
      </CardContent>
    </Card>
  );
}