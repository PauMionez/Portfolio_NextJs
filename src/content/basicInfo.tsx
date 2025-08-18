"use client";

import React from "react";
import { MapPin, Laptop, Medal } from "lucide-react";

const basicInfo = () => {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <img
        alt="Pau Mionez"
        fetchPriority="high"
        width="160"
        decoding="async"
        data-nimg="1"
        className="rounded-lg w-32 h-32 md:w32 md:h-32 object-cover flex-shrink-0"
        src="/mypic.jpg"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between grap-2">
          <div className="flex items-center grap-2">
            <h1 className="text-lg md:text-2xl font-bold truncate">
              Ma. Pauline Mae Mionez
            </h1>
          </div>
          {/* //Button here */}
        </div>
        <p className="text-xs md:text-sm text-foreground/70 mt-0.5 flex items-center gap-1">
          <MapPin className="text-amber-300 w-4 h-4" />
          <span className="truncate">Angono Rizal, Philippines</span>
        </p>
        <p className="text-sm md:text-base mt-1.5 md:mt-2 flex items-center grap-2">
          <Laptop className="text-gray-400 " />
          Web and Software C# Developer
        </p>
        <div className="flex gap-2 mt-3 md:mt-4">
          <div className="hidden md:block">
            <div className="relative z-max">
              <div className="flex items-center hackathon-badge rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto bg-gradient-hackathon">
                <a
                  href="https:www.facebook.com/share/p/16nc9tKPQk/"
                  className="inline-flex h-7 md:h-8 items-center rounded-l-lg rounded-r-lg px-2.5 md:px-4 text-[10px] md:text-xs font-medium text-white transition-all duration-300 hover:brightness-110 gap-1 md:gap-1.5 whitespace-nowrap relative overflow-hidden group flex-1 justify-center md:justify-start
                  bg-gradient-hackathon
                  text-shadow"
                >
                  <Medal />
                  <span className="relative z-10 ">
                    Rizal Game Jam 2019 Winner
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 max-w-4xl mx-auto">
    //   {/* Profile Image */}
    //   <img
    //     className="w-48 h-48 object-cover rounded-xl shadow-lg"
    //     src="/mypic.jpg"
    //     alt="Profile"
    //   />

    //   {/* Info Block */}
    //   <div className="text-center md:text-left space-y-1">
    //     <h2 className="text-2xl font-bold text-white">
    //       Ma. Pauline Mae Mionez
    //     </h2>
    //     <div className="flex items-center ">
    //       <MapPin className="text-amber-300 w-4 h-4" />
    //       <p className="text-sm font-semibold text-amber-300">Angono Rizal</p>
    //     </div>
    //     <div className="flex items-center grap-2">
    //       <Laptop className="text-gray-400 " />
    //       <p className="text-gray-400 font-medium">
    //         Web and Software C# Developer
    //       </p>
    //     </div>

    //     <div className="bg-amber-300 rounded-2xl p-1.5 my-2 ">
    //       <a
    //         className="text-sm"
    //         href="https:www.facebook.com/share/p/16nc9tKPQk/"
    //       >
    //         🏆 Rizal Game Jam 2019 Winner
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default basicInfo;
