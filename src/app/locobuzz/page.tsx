"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Briefcase } from "lucide-react";

export default function LocobuzzPage() {
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
            Locobuzz Solutions Experience
          </h1>
          <p className="text-xl dark:text-red-300 text-red-700">Python Developer Intern</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm dark:text-gray-300 text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Mumbai
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Mar 2024 – June 2024
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              Internship
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Joining Story */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">How I Joined</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              I joined Locobuzz Solutions through college placements. This opportunity came during my final year of engineering,
              and it was an exciting chance to gain real-world experience in software development.
            </p>
          </div>

          {/* Training Period */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">Training Period (3 Months)</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
              During the initial 3-month training period, I underwent comprehensive learning covering:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#f44f2f] dark:text-purple-400">•</span>
                  <span className="dark:text-gray-300 text-gray-700">Backend Development Fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#f44f2f] dark:text-purple-400">•</span>
                  <span className="dark:text-gray-300 text-gray-700">Python Core Programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#f44f2f] dark:text-purple-400">•</span>
                  <span className="dark:text-gray-300 text-gray-700">Data Structures & Algorithms</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#f44f2f] dark:text-purple-400">•</span>
                  <span className="dark:text-gray-300 text-gray-700">JavaScript Fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#f44f2f] dark:text-purple-400">•</span>
                  <span className="dark:text-gray-300 text-gray-700">API Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#f44f2f] dark:text-purple-400">•</span>
                  <span className="dark:text-gray-300 text-gray-700">PostgreSQL & DBMS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">Python Developer Role</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
              After completing the training, I was appointed as a Python Developer and relocated to Locobuzz's Mumbai office.
              My primary responsibilities included:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Bug Fixing:</strong> Identifying and resolving software bugs to improve system stability and performance
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Code Optimization:</strong> Refactoring and optimizing existing code for better efficiency and maintainability
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Web Scraping:</strong> Developing automated systems to collect and process web data using Scrapy
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Data Pipeline:</strong> Building robust data pipelines to store and process scraped data efficiently
                </span>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#fff2f0] dark:bg-red-500/20 rounded-lg p-4 border border-[#f44f2f]/20 dark:border-red-500/30 shadow-sm dark:shadow-red-500/10">
                <div className="text-2xl font-bold text-[#f44f2f] dark:text-red-300 mb-1">5,000+</div>
                <div className="text-sm text-gray-700 dark:text-red-100">Daily API Calls Processed</div>
              </div>
              <div className="bg-[#fff2f0] dark:bg-red-500/20 rounded-lg p-4 border border-[#f44f2f]/20 dark:border-red-500/30 shadow-sm dark:shadow-red-500/10">
                <div className="text-2xl font-bold text-[#f44f2f] dark:text-red-300 mb-1">50K+</div>
                <div className="text-sm text-gray-700 dark:text-red-100">Product Reviews Scraped</div>
              </div>
              <div className="bg-[#fff2f0] dark:bg-red-500/20 rounded-lg p-4 border border-[#f44f2f]/20 dark:border-red-500/30 shadow-sm dark:shadow-red-500/10">
                <div className="text-2xl font-bold text-[#f44f2f] dark:text-red-300 mb-1">95%</div>
                <div className="text-sm text-gray-700 dark:text-red-100">Scraping Accuracy</div>
              </div>
              <div className="bg-[#fff2f0] dark:bg-red-500/20 rounded-lg p-4 border border-[#f44f2f]/20 dark:border-red-500/30 shadow-sm dark:shadow-red-500/10">
                <div className="text-2xl font-bold text-[#f44f2f] dark:text-red-300 mb-1">100%</div>
                <div className="text-sm text-gray-700 dark:text-red-100">Expired Link Prevention</div>
              </div>
            </div>
          </div>

          {/* Overall Experience */}
          <div className="bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">Overall Experience</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Great Team & Culture:</strong> Met competitive and highly skilled people, with helpful seniors and responsible HRs
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Amazing Work Environment:</strong> Loved the work environment and could see a promising future at the company
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#f44f2f] dark:text-purple-400 mt-1">•</span>
                <span className="dark:text-gray-300 text-gray-700">
                  <strong>Personal Circumstances:</strong> Left the company right after internship due to personal issues and challenging circumstances
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}