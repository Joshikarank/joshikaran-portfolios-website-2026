import Chat from "@/components/joshis-ai/Chat";

export default function JoshiAIPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-muted/10 px-4 py-6 sm:px-6 sm:py-10">
      <div className="w-full max-w-4xl"><Chat /></div>
    </main>
  );
}
