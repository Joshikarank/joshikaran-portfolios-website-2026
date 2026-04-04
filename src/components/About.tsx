export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border border-border/70 bg-card/70 p-8 shadow-xl shadow-primary/10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-primary/80">
            About Me
          </p>
          <h3 className="text-2xl font-semibold text-foreground">JOSHIKARAN.K</h3>
          <p className="text-base leading-8 text-muted-foreground">
            Backend + AI Engineer specializing in scalable system design and data-driven applications. Experienced in building multi-tenant
            architectures and high-performance systems. Proficient in Python, JavaScript, and TypeScript, with hands-on experience in
            frameworks such as FastAPI, React, and NestJS. Adept at rapidly learning and applying new technologies, leveraging AI-assisted
            tools to accelerate development while maintaining strong ownership of architecture, code quality, and data privacy compliance.
          </p>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>• Designed modular microservices architecture (NestJS, FastAPI)</li>
            <li>• Built high-performance search and logging stack using ELK</li>
            <li>• Implemented AI-powered assistants with LLM APIs</li>
          </ul>
        </div>

        <div className="grid gap-4 rounded-3xl border border-border/70 bg-background/80 p-8 text-sm text-foreground/80 shadow-xl shadow-slate-950/5">
          <div>
            <p className="font-semibold">Location</p>
            <p>Chennai, India</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <p>+91 6383657238</p>
            <p>joshikarank2002@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">Links</p>
            <p>linkedin.com/in/joshikarank</p>
          </div>
        </div>
      </div>
    </section>
  );
}
