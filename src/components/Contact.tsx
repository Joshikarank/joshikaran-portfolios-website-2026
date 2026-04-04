import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border/70 bg-card/80 p-8 shadow-xl shadow-primary/5">
          <p className="text-sm uppercase tracking-[0.35em] text-primary/80">Contact me</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">Let's build something together</h3>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            I'm available for new projects and collaborations. Reach out for portfolio
            reviews, full-stack builds, or AI-powered web solutions.
          </p>
          <div className="mt-8 space-y-4 text-sm text-foreground/80">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <p>joshikarank2002@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 6383657238</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ExternalLink className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p>linkedin.com/in/joshikarank</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-3xl border border-border/70 bg-background/80 p-8 text-center shadow-xl shadow-slate-950/5">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary/80">Get in touch</p>
            <p className="mt-4 text-base leading-7 text-foreground">
              Send a note with the project idea and I'll reply quickly.
            </p>
            <Button asChild className="mt-8">
              <a href="mailto:joshikarank2002@gmail.com">Email me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
