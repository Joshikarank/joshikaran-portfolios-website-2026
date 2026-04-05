"use client";

import Timeline from "@/components/Timeline";
// app/experience/page.tsx

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
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e9f8ea]/60 via-[#f8f6e8]/55 to-[#f44f2f]/15 dark:bg-gradient-to-br dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#e9f8ea]/30 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f8f6e8]/25 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#f44f2f]/12 dark:bg-purple-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center dark:text-white text-gray-900 drop-shadow-lg">
          Professional Experience
        </h2>
        <p className="text-center dark:text-red-300 text-red-700 mb-16">My journey in software development</p>

        <div className="space-y-8">
          <Timeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
}

