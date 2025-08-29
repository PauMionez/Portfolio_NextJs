"use client";

import React from "react";
import { LayoutTemplate } from "lucide-react";

const projects = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in">
      <div className="flex items-center gap-2">
        <LayoutTemplate />
        <h2 className="text-lg font-bold">Projects</h2>
      </div>
    </div>
  );
};

export default projects;
