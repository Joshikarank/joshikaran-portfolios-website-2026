"use client";

import Chat from "@/components/joshis-ai/Chat";

export default function JoshiAIPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Chat />
      </div>
    </div>
  );
}