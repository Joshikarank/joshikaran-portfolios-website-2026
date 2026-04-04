import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6 max-w-6xl mx-auto", className)}>
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-primary/80">
          {id.replace("-", " ")}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
