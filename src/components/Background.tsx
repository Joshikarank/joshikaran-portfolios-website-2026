import { type ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_40%),radial-gradient(circle_at_10%_30%,_rgba(168,85,247,0.16),_transparent_25%)] blur-3xl dark:opacity-90" />
      <div className="pointer-events-none absolute -right-16 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.16),_transparent_55%)] blur-3xl dark:opacity-80" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(253,224,71,0.14),_transparent_55%)] blur-3xl dark:opacity-80" />
      <div className="relative">{children}</div>
    </div>
  );
}
