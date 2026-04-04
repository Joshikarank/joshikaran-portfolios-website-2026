"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border sm:left-4"></div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center ml-2 sm:ml-0">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="ml-4 sm:ml-6 pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">{exp.dates}</span>
              </div>
              <p className="text-primary font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
              {exp.description && (
                <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
              )}
              <Button variant="outline" size="sm" className="gap-2" title="Click here for more details">
                View More Details
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
