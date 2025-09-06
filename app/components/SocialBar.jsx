"use client";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-6">
      <a
        href="https://github.com/"
        target="_blank"
        className="p-3 bg-gray-800 text-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition"
      >
        <Github size={22} />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        className="p-3 bg-gray-800 text-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition"
      >
        <Linkedin size={22} />
      </a>
      <a
        href="https://instagram.com/"
        target="_blank"
        className="p-3 bg-gray-800 text-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition"
      >
        <Instagram size={22} />
      </a>
    </div>
  );
}
