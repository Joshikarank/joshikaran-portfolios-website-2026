import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
}: Props) {
  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Content */}
      <CardContent className="relative p-8 space-y-6">
        {/* Header with icon */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="h-5 w-5 text-primary" />
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>

        {/* Tech stack */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          asChild
          className="w-full group/btn border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
        >
          <a href={github} target="_blank" className="flex items-center justify-center gap-2">
            <GitBranch className="h-4 w-4" />
            <span>View Repository</span>
          </a>
        </Button>
      </CardContent>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
    </Card>
  );
}