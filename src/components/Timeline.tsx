// components/Timeline.tsx
"use client";

import { useRouter } from "next/navigation";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  title: string;
  location: string;
  dates: string;
  description?: string;
}

interface TimelineProps {
  experiences: ExperienceItem[];
}

export default function Timeline({ experiences }: TimelineProps) {
  const router = useRouter();

  const handleArrowClick = (index: number) => {
    if (index === 1) { // Locobuzz experience
      router.push('/locobuzz');
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Timeline Line - Hidden on mobile, visible on desktop */}
      <div className="hidden sm:block absolute left-[19px] top-8 bottom-8 w-0.5 bg-[#f44f2f] dark:bg-gradient-to-b dark:from-purple-500 dark:via-pink-500 dark:to-orange-500"></div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex flex-col sm:flex-row sm:items-start gap-4">
            {/* Timeline Icon */}
            <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 mx-auto sm:mx-0">
              <div className="relative w-full h-full bg-[#f44f2f] rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-lg">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 ml-0 sm:ml-2">
              <div 
                className="group relative bg-[#f8f6e8]/95 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-8 border border-[#f44f2f]/10 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-all duration-500"></div>
                
                {/* Decorative Blur */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/15 rounded-full blur-2xl"></div>

                {/* Arrow Button */}
                <button 
                  onClick={() => handleArrowClick(index)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 bg-[#f44f2f] dark:bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  title="View more details about the job experience"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start gap-3 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#171c25] dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-[#f44f2f] dark:text-purple-400 font-semibold text-sm sm:text-base">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 sm:hidden">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          {exp.dates}
                        </span>
                      </div>
                    </div>
                    
                    {/* Date Badge - Desktop */}
                    <span className="hidden sm:inline-block px-3 py-1.5 bg-[#fff2f0] dark:bg-white/10 rounded-full text-xs sm:text-sm font-medium text-[#f44f2f] dark:text-white backdrop-blur-sm border border-[#f44f2f]/10 dark:border-white/20">
                      {exp.dates}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm sm:text-base leading-relaxed space-y-2">
                      {exp.description?.split('\n').map((line, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-xs sm:text-sm">{line.replace('·', '').trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Achievement Tags */}
              <div className="flex flex-wrap gap-2 mt-3 pl-2">
                {index === 0 && (
                  <>
                    <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full">🚀 Microservices</span>
                    <span className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 rounded-full">🤖 AI</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full">📊 ELK Stack</span>
                  </>
                )}
                {index === 1 && (
                  <>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 rounded-full">📈 5K+ API Calls</span>
                    <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded-full">🕷️ 50K+ Scraped</span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 rounded-full">🔒 Security</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="absolute -bottom-6 left-[19px] transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden sm:block"></div>
    </div>
  );
}