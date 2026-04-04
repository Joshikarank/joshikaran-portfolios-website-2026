import { Code, Brain, Database, Wrench, GitBranch, Layers } from "lucide-react";

const skillsData = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Layers,
    title: "Frameworks",
    skills: ["Django", "FastAPI", "NestJS", "Next.js", "React"],
    gradient: "from-sky-500/20 to-blue-500/20",
    borderColor: "border-sky-500/30",
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: ["XGBoost", "Scikit-learn", "PyTorch", "Vector Embeddings", "FAISS"],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "SQLite"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "CI/CD", "Azure VM", "pm2"],
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    skills: ["GitHub Copilot", "VS Code", "ESLint", "Prettier"],
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit built through hands-on experience with modern technologies and best practices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border ${category.borderColor} bg-gradient-to-br ${category.gradient} backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-background/40 text-foreground border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200 mr-2 mb-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}