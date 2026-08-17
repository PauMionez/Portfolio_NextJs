"use client";

import React from "react";
import { LayoutTemplate } from "lucide-react";
import { projectConfig } from "@/lib/data/project-config";

const Projects = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-8 group animate-fade-in">
      <div className="flex items-center gap-2">
        <LayoutTemplate className="text-gray-400" />
        <h2 className="text-lg font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projectConfig.map((project, index) => (
          <div
            key={index}
            className="bento-card p-3 space-y-1"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-1"
              href={project.Link}
            >
              <h3 className="text-sm font-semibold group-hover:text-accent">
                {project.Title}
              </h3>

              <p className="text-xs text-foreground/70">
                {project.Description}
              </p>

              <p className="text-xs text-foreground/50 font-mono bg-foreground/5 border border-foreground/10 px-2 py-1 rounded-md inline-block mt-1">
                {project.Link_name}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;