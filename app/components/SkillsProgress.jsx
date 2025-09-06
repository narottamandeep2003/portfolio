"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90, color: "bg-cyan-500" },
  { name: "Node.js", level: 85, color: "bg-green-500" },
  { name: "MongoDB", level: 80, color: "bg-emerald-500" },
  { name: "Next.js", level: 75, color: "bg-black" },
  { name: "AWS", level: 70, color: "bg-orange-500" },
  { name: "Docker", level: 65, color: "bg-blue-500" },
  { name: "C++", level: 60, color: "bg-indigo-500" },
];

export default function SkillsProgress() {
  return (
    <div
      id="skills-progress"
      className="w-[calc(100vw-50px)] md:w-[calc(100vw-300px)] min-h-screen
                 bg-white rounded-3xl mx-auto flex flex-col items-center justify-center p-6 md:p-12"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
        Skill Levels
      </h1>

      <div className="w-full max-w-2xl space-y-6">
        {skills.map((skill, i) => (
          <div key={i}>
            {/* Skill name + % */}
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-gray-500 text-sm">{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-3 ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
