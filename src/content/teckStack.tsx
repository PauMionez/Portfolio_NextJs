"use client";
import React from "react";
import { FlaskConical } from "lucide-react";

const teckStack = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-200">
      <div className="flex items-center gap-2">
        <FlaskConical className="text-gray-400 " />
        <h2 className="text-lg font-bold">Teck Stack</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-2">FrontEnd</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              HTML
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              CSS
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              Next.js
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              TailWind CSS
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              Canva
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              Figma
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              BootStrap
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">BackEnd</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              C#
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              .Net
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              ASP.Net
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              PHP
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              JavaScript
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              SqLite
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              MySql
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default teckStack;
