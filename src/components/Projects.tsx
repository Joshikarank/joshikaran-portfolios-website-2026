import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A showcase of innovative solutions and technical implementations
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}