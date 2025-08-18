"use client";

import React from "react";
import { CircleUser } from "lucide-react";

const aboutme = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in">
      <div className="flex items-center gap-2">
        <CircleUser className="text-gray-400 " />
        <h2 className="text-lg font-bold">About</h2>
      </div>
      <p className="text-xs text-foreground/70 leading-relaxed">
        {/* Hi! I'm a BS in Information Technology graduate with a strong passion
        for software development, tech troubleshooting, and digital creativity.
        <br />
        <br /> */}
        I'm a software developer passionate about crafting both desktop and web
        applications. I enjoy solving complex problems, designing intuitive user
        experiences, and continuously learning new technologies.
        <br />
        <br />
        When I'm not working, you'll probably find me gaming, listening to
        music, drinking coffee, or catching up on anime.
      </p>
    </div>
  );
};

export default aboutme;
