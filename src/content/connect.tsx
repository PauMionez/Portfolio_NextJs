"use client";
import React from "react";
import { Mail, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { connectionConfig } from "@/lib/data/connection-config";

const connect = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-3 group animate-fade-in animation-delay-500">
      <div className="flex items-center gap-2">
        <Mail className="text-gray-400 " />
        <h2 className="text-lg font-bold">Connect</h2>
      </div>
      <div className="space-y-4">
        <div>
          <a
            className="block p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/20 transition-colors"
            href={connectionConfig.goEmail}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xs text-foreground/70">Email</p>
            <p className="text-sm font-medium">{connectionConfig.email}</p>
          </a>
        </div>
        <div className="block p-2 rounded-md bg-foreground/5 border border-foreground/10">
          <p className="text-xs text-foreground/70">Phone</p>
          <p className="text-sm font-medium">{connectionConfig.phone}</p>
        </div>
        <a
          className="flex items-center gap-2 p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/20 transition-colors"
          href={connectionConfig.cv}
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
              href={connectionConfig.github}
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
              href={connectionConfig.linkedin}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/20 transition-colors"
              aria-label="Visit Instagram profile"
              title="Visit Instagram profile"
              href={connectionConfig.instagram}
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
