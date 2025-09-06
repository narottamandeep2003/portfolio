"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandCpp,
} from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 w-6 h-6" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-6 h-6" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-6 h-6" /> },
  { name: "TypeScript", icon: <TbBrandTypescript className="text-blue-500 w-6 h-6" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-6 h-6" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="text-black w-6 h-6" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
  { name: "MongoDB", icon: <TbBrandMongodb className="text-green-400 w-6 h-6" /> },
  { name: "C++", icon: <TbBrandCpp className="text-blue-500 w-6 h-6" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500 w-6 h-6" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 w-6 h-6" /> },
  { name: "Git", icon: <FaGit className="text-red-500 w-6 h-6" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 w-6 h-6" /> },
  { name: "TailwindCSS", icon: <TbBrandTailwind className="text-sky-400 w-6 h-6" /> },
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