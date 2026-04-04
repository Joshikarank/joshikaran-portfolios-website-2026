import Timeline from "@/components/Timeline";

const experiences = [
  {
    company: "Part Matters",
    title: "Full-stack Developer",
    location: "Chennai",
    dates: "May 2025 – Present",
    description: "· Designed a modular microservices architecture (NestJS, FastAPI) separating API, core logic, and AI workloads, enabling scalable and independently optimized system components.\n· Built and deployed a high-performance search and logging stack using ELK (Elasticsearch), Docker, Redis caching, significantly improving system response times and observability.\n· Implemented multi-tenant RBAC architecture and modeled complex hierarchical data using adjacency lists and BFS traversal for efficient commodity-to-supplier mapping.\n· Developed an AI-powered assistant using LLM APIs with validation layers and FAISS-based retrieval for reliable, context-aware conversational workflows."
  },
  {
    company: "Locobuzz Solutions, Private Limited",
    title: "Python Developer Intern",
    location: "Mumbai",
    dates: "Mar 2024 – June 2024",
    description: "· Engineered TikTok data retrieval service that processed 5,000+ daily API calls, reducing manual data collection time by 70%\n· Automated Amazon/Flipkart review scraping system using Scrapy that collected 50K+ product reviews with 95% accuracy\n· Implemented share-link expiration feature that improved platform security by preventing 100% of expired link accesses\n· Fixed timezone discrepancies affecting 1,200+ active users, enhancing dashboard reliability"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Professional Experience</h2>
      <Timeline experiences={experiences} />
    </section>
  );
}
