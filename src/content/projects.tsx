"use client";

import React from "react";
import { LayoutTemplate } from "lucide-react";

const projects = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-8 group animate-fade-in">
      <div className="flex items-center gap-2">
        <LayoutTemplate className="text-gray-400 " />
        <h2 className="text-lg font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bento-card p-3 space-y-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
            href="https://snakegamepau.vercel.app/"
          >
            <h3 className="text-sm font-semibold group-hover:text-accent">
              Snake Games
            </h3>
            <p className="text-xs text-foreground/70">
              Snake games using Next JS
            </p>
            <p className="text-xs text-foreground/50 font-mono bg-foreground/5 border border-foreground/10 px-2 py-1 rounded-md inline-block mt-1">
              snakegamepau.vercel.app
            </p>
          </a>
        </div>

        <div className="bento-card p-3 space-y-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
            href="https://github.com/PauMionez/HandWritten-OCR-II.git"
          >
            <h3 className="text-sm font-semibold group-hover:text-accent">
              Hand Written ICR
            </h3>
            <p className="text-xs text-foreground/70">
              Text recognition using TrOcr using ONNX runtime
            </p>
            <p className="text-xs text-foreground/50 font-mono bg-foreground/5 border border-foreground/10 px-2 py-1 rounded-md inline-block mt-1">
              PauMionez/HandWritten-OCR-II/releases/tag/v2
            </p>
          </a>
        </div>

        <div className="bento-card p-3 space-y-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
            href="https://github.com/PauMionez/Alto-Viewer"
          >
            <h3 className="text-sm font-semibold group-hover:text-accent">
              Alto Viewer
            </h3>
            <p className="text-xs text-foreground/70">
              XML ALTO files with highlighted text regions
            </p>
            <p className="text-xs text-foreground/50 font-mono bg-foreground/5 border border-foreground/10 px-2 py-1 rounded-md inline-block mt-1">
              PauMionez/Alto-Viewer
            </p>
          </a>
        </div>

        <div className="bento-card p-3 space-y-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
            href="https://snakegamepau.vercel.app/"
          >
            <h3 className="text-sm font-semibold group-hover:text-accent">
              Snake Games
            </h3>
            <p className="text-xs text-foreground/70">
              Snake games using Next JS
            </p>
            <p className="text-xs text-foreground/50 font-mono bg-foreground/5 border border-foreground/10 px-2 py-1 rounded-md inline-block mt-1">
              snakegamepau.vercel.app
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default projects;
