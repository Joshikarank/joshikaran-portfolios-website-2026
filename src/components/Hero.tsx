import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.7fr_1.3fr] items-center">
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-base uppercase tracking-[0.35em] text-primary/80">
            Backend + AI Engineer
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Hi, I&apos;m JoshiKaran
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0">
            Specializing in scalable system design and AI-first products, building reliable systems with strong architecture and clean code.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button asChild>
              <a href="#about">Learn More</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
            <Image
              src="/joshikaran.png"
              alt="Joshi Karan portrait"
              fill
              className="object-cover filter drop-shadow-lg"
              sizes="(max-width: 768px) 90vw, 420px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}