"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus,
  SiAmazon,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiGit,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 className="text-orange-600 w-12 h-12" />, top: "20%", left: "15%" },
  { icon: <SiCss3 className="text-blue-600 w-12 h-12" />, top: "20%", left: "70%" },
  { icon: <SiJavascript className="text-yellow-400 w-12 h-12" />, top: "65%", left: "20%" },
  { icon: <SiTypescript className="text-blue-500 w-12 h-12" />, top: "75%", left: "60%" },
  { icon: <SiReact className="text-cyan-400 w-12 h-12" />, top: "15%", left: "55%" },
  { icon: <SiNextdotjs className="text-black w-12 h-12" />, top: "50%", left: "85%" },
  { icon: <SiNodedotjs className="text-green-500 w-12 h-12" />, top: "35%", left: "25%" },
  { icon: <SiMongodb className="text-green-400 w-12 h-12" />, top: "60%", left: "75%" },
  { icon: <SiCplusplus className="text-blue-500 w-12 h-12" />, top: "80%", left: "35%" },
  { icon: <SiAmazon className="text-orange-500 w-12 h-12" />, top: "35%", left: "60%" },
  { icon: <SiDocker className="text-blue-400 w-12 h-12" />, top: "70%", left: "45%" },
  { icon: <SiGit className="text-red-500 w-12 h-12" />, top: "25%", left: "40%" },
  { icon: <SiGithub className="text-gray-800 w-12 h-12" />, top: "55%", left: "10%" },
  { icon: <SiTailwindcss className="text-sky-400 w-12 h-12" />, top: "85%", left: "75%" },
];

export default function SkillsSection() {
  return (
    <div
      id="skills"
      className="relative w-[calc(100vw-50px)] md:w-[calc(100vw-300px)] min-h-screen 
                  rounded-3xl mx-auto flex items-center justify-center overflow-hidden"
    >
      {/* Title in Center */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center z-10 text-black">
        Skills
      </h1>

      {/* Floating Icons */}
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: skill.top, left: skill.left }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          {skill.icon}
        </motion.div>
      ))}
    </div>
  );
}
