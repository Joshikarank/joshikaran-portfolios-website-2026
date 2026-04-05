"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Briefcase } from "lucide-react";

export default function PartMattersPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9f8ea]/60 via-[#f8f6e8]/55 to-[#f44f2f]/15 dark:bg-gradient-to-br dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e9f8ea]/60 via-[#f8f6e8]/55 to-[#f44f2f]/15 dark:bg-gradient-to-br dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#e9f8ea]/30 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f8f6e8]/25 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#f44f2f]/12 dark:bg-purple-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-8 text-[#f44f2f] dark:text-purple-400 hover:text-[#d43d2a] dark:hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Experience
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-gray-900 drop-shadow-lg">
            Part Matters Experience
          </h1>
          <p className="text-xl dark:text-red-300 text-red-700">Full-stack Developer</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm dark:text-gray-300 text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Chennai
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              May 2025 – Present
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              Full-time
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Joining Story */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">How I Joined</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              After a period of upskilling and building projects while actively engaging on LinkedIn and coding platforms, I connected with the hiring manager and earned an interview opportunity.
              I cleared the interview process and joined Part Matters as a Graduate Engineer Trainee (GET).
              The first 2 months were focused on learning platform concepts before I began working on a single, complex multi-tenant business and data management platform.
            </p>
            <p className="mt-4 dark:text-gray-300 text-gray-700 leading-relaxed">
              The project was backend-heavy, with database, API, and microservices ownership. It was a highly componentized system with challenging business and data management requirements.
            </p>
          </div>

          {/* Building Approach */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">Building Approach</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              We started with a monolith-first approach in Next.js to validate the product quickly and deliver a working demo.
              After the demo phase, I migrated the backend into modular microservices, moving process-heavy services into NestJS while keeping the frontend stable and integrated.
            </p>
          </div>

          {/* Technical Responsibilities */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">Technical Responsibilities</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Microservices Architecture:</strong> Designed and implemented modular microservices using NestJS and FastAPI, separating API logic, core business logic, and AI workloads for optimal scalability.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Backend Engineering:</strong> Owned polyglot backend architecture using TypeScript, JavaScript, and Python, including database and API design validated by the technical manager.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>AI/ML Integration:</strong> Built NLP and LLM API workflows with cache storage to reduce API hits and increase search relevance, used PaddleOCR and OpenCV for image processing, and applied semantic embeddings for searchable data.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Frontend Collaboration:</strong> Contributed to the Next.js frontend by fixing a longstanding AI component bug, improving skeleton UI, adding morph logo loaders, and integrating it with NestJS APIs.
                </span>
              </div>
            </div>
          </div>

          {/* Key Technologies */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">Key Technologies & Tools</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-[#f44f2f] dark:text-purple-400">Backend</h3>
                <div className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                  <div>• NestJS</div>
                  <div>• FastAPI</div>
                  <div>• Node.js</div>
                  <div>• Python</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#f44f2f] dark:text-purple-400">Infrastructure</h3>
                <div className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                  <div>• Docker</div>
                  <div>• Elasticsearch</div>
                  <div>• Redis</div>
                  <div>• PostgreSQL</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#f44f2f] dark:text-purple-400">AI/ML</h3>
                <div className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                  <div>• LLM APIs</div>
                  <div>• FAISS</div>
                  <div>• Vector Search</div>
                  <div>• AI Validation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact & Achievements */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">Impact & Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#fff2f0] dark:bg-red-500/20 rounded-lg p-4 border border-[#f44f2f]/20 dark:border-red-500/30 shadow-sm dark:shadow-red-500/10">
                <div className="text-2xl font-bold text-[#f44f2f] dark:text-red-300 mb-1">Scalable</div>
                <div className="text-sm text-gray-700 dark:text-red-100">Microservices Architecture</div>
              </div>
              <div className="bg-[#fff2f0] dark:bg-red-500/20 rounded-lg p-4 border border-[#f44f2f]/20 dark:border-red-500/30 shadow-sm dark:shadow-red-500/10">
                <div className="text-2xl font-bold text-[#f44f2f] dark:text-red-300 mb-1">High Performance</div>
                <div className="text-sm text-gray-700 dark:text-red-100">ELK Stack & Caching</div>
              </div>
              <div className="bg-[#fff2f0] dark:bg-red-500/20 rounded-lg p-4 border border-[#f44f2f]/20 dark:border-red-500/30 shadow-sm dark:shadow-red-500/10">
                <div className="text-2xl font-bold text-[#f44f2f] dark:text-red-300 mb-1">Secure</div>
                <div className="text-sm text-gray-700 dark:text-red-100">Multi-tenant RBAC</div>
              </div>
              <div className="bg-[#fff2f0] dark:bg-red-500/20 rounded-lg p-4 border border-[#f44f2f]/20 dark:border-red-500/30 shadow-sm dark:shadow-red-500/10">
                <div className="text-2xl font-bold text-[#f44f2f] dark:text-red-300 mb-1">AI-Powered</div>
                <div className="text-sm text-gray-700 dark:text-red-100">Conversational Assistants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}