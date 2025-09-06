"use client";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus,
  SiAmazon,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600 w-6 h-6" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600 w-6 h-6" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 w-6 h-6" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black w-6 h-6" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-6 h-6" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 w-6 h-6" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500 w-6 h-6" /> },
  { name: "AWS", icon: <SiAmazon className="text-orange-500 w-6 h-6" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400 w-6 h-6" /> },
  { name: "Git", icon: <SiGit className="text-red-500 w-6 h-6" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-800 w-6 h-6" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 w-6 h-6" /> },
];

export default function SkillList() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-black">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-md border hover:shadow-lg hover:-translate-y-1 transition transform"
          >
            {skill.icon}
            <span className="font-medium text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
