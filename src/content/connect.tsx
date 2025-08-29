"use client";
import React from "react";
import { Mail, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const connect = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-3 group animate-fade-in animation-delay-500">
      <div className="flex items-center gap-2">
        <Mail className="text-gray-400 " />
        <h2 className="text-lg font-bold">Connect</h2>
      </div>
      <div className="space-y-4">
        <a
          className="block p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/20 transition-colors"
          href="mailto:pau.mionez@gmail.com"
        >
          <p className="text-xs text-foreground/70">Email</p>
          <p className="text-sm font-medium">pau.mionez@gmail.com</p>
        </a>
        <div className="block p-2 rounded-md bg-foreground/5 border border-foreground/10">
          <p className="text-xs text-foreground/70">Phone</p>
          <p className="text-sm font-medium">09365318575</p>
        </div>
        <a
          className="flex items-center gap-2 p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/20 transition-colors"
          href="https://drive.google.com/file/d/1x83ps8ia5DEaYfjuXHqcNBcY7Za13bV6/view?usp=sharing"
        >
          <FileDown className="w-5 h-5" />
          <p className="text-sm font-medium">Download my CV</p>
        </a>

        <div>
          <p className="text-xs text-foreground/70 mb-2">Social Links</p>
          <div className="grid grid-cols-3 gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/20 transition-colors"
              aria-label="Visit GitHub profile"
              title="Visit GitHub profile"
              href="https://github.com/PauMionez"
            >
              {/* <FaGithub className="w-5 h-5 text-white" /> */}
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/20 transition-colors"
              aria-label="Visit LinkIn profile"
              title="Visit LinkIn profile"
              href="https://www.linkedin.com/in/ma-pauline-mae-mionez"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/20 transition-colors"
              aria-label="Visit Instagram profile"
              title="Visit Instagram profile"
              href="https://www.instagram.com/pxx_mnz?igsh=MXVmYmliMnFjYnhvZQ=="
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect;
