"use client";
import React from "react";
import { BriefcaseBusiness } from "lucide-react";

const experience = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 md:row-span-2 space-y-2 group animate-fade-in animation-delay-200">
      <div className="flex items-center gap-2">
        <BriefcaseBusiness className="text-gray-400" />
        <h2 className="text-lg font-bold">Experience</h2>
      </div>

      <div className="relative space-y-4 mt-4">
        <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>

        <div className="relative pl-6 group/role">
          {/* <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-accent transition-colors"></div> */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-accent transition-colors">
              Software Developer
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70 text-accent/70">
                TrueBPO Inc.
              </span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10 bg-accent/10 border-accent/20">
                2025
              </span>
            </div>
          </div>
        </div>

        <div className="relative pl-6 group/role">
          {/* <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background group-hover/role:bg-accent transition-colors"></div> */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold  group-hover/role:text-accent transition-colors">
              Data Entry
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70 text-accent/70">
                TrueBPO Inc.
              </span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2024
              </span>
            </div>
          </div>
        </div>

        <div className="relative pl-6 group/role">
          {/* <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background group-hover/role:bg-accent transition-colors"></div> */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold  group-hover/role:text-accent transition-colors">
              BS Information Technology
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70 text-accent/70">
                PBTS Colleges Inc.
              </span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2023
              </span>
            </div>
          </div>
        </div>

        <div className="relative pl-6 group/role">
          {/* <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background group-hover/role:bg-accent transition-colors"></div> */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold  group-hover/role:text-accent transition-colors">
              Rizal Game Jam
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70 text-accent/70">
                Morong, Rizal
              </span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2019
              </span>
            </div>
          </div>
        </div>

        <div className="relative pl-6 group/role">
          {/* <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background group-hover/role:bg-accent transition-colors"></div> */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold  group-hover/role:text-accent transition-colors">
              Hello World👋🏻
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70 text-accent/70">
                My first line of code
              </span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2018
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
