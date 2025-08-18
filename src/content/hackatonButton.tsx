"use client";
import React from "react";
import { Medal } from "lucide-react";

const hackatonButton = () => {
  return (
    <div className="block md:hidden mt-4">
      <div className="relative z-max">
        <div
          className="flex items-center hackathon-badge rounded-lg shadow-lg hover:shadow-xl 
         transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
        >
          <a
            href="https:www.facebook.com/share/p/16nc9tKPQk/"
            className="inline-flex h-7 md:h-8 items-center rounded-l-lg rounded-r-lg px-2.5 md:px-4 text-[10px] md:text-xs font-medium
            text-white transition-all duration-300 hover:brightness-110 gap-1 md:gap-1.5 whitespace-nowrap relative overflow-hidden group flex-1 justify-center md:justify-start
            bg-gradient-hackathon
            text-shadow"
          >
            <Medal />
            <span className="relative z-10 ">Rizal Game Jam 2019 Winner</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default hackatonButton;
