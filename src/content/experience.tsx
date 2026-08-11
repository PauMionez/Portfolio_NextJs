"use client";

import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { experienceConfig } from "@/lib/data/experience-config";

const Experience = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 md:row-span-2 space-y-2 group animate-fade-in animation-delay-200">
      {/* Header */}
      <div className="flex items-center gap-2">
        <BriefcaseBusiness className="text-gray-400" />
        <h2 className="text-lg font-bold">Experience</h2>
      </div>

      {/* Experience Timeline */}
      <div className="relative space-y-4 mt-4">
        {/* Vertical timeline line */}
        <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border" />

        {experienceConfig.map((experience, index) => (
          <div
            key={`${experience.Title}-${experience.Year}-${index}`}
            className="relative pl-6 group/role"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
                index === 0
                  ? "border-accent bg-accent"
                  : "border-border bg-background group-hover/role:bg-accent"
              }`}
            />

            {/* Experience Content */}
            <div className="space-y-1">
              {/* Title */}
              <h3
                className={`text-sm font-semibold transition-colors ${
                  index === 0
                    ? "text-accent"
                    : "group-hover/role:text-accent"
                }`}
              >
                {experience.Title}
              </h3>

              {/* Company + Year */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-foreground/70 text-accent/70">
                  {experience.Company}
                </span>

                <span
                  className={`text-xs font-mono px-1.5 py-0.5 rounded-full border ${
                    index === 0
                      ? "bg-accent/10 border-accent/20"
                      : "bg-foreground/5 border-foreground/10"
                  }`}
                >
                  {experience.Year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
