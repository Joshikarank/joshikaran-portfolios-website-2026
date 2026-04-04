export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/90 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} JoshiKaran. Built with Next.js.</p>
        <div className="flex flex-wrap gap-4 text-foreground/70">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@example.com"
            className="transition hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
