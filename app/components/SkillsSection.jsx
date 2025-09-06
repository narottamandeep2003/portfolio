"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandCpp,
} from "react-icons/tb";

const skills = [
  { icon: <FaHtml5 className="text-orange-600 w-12 h-12" />, top: "20%", left: "15%" },
  { icon: <FaCss3Alt className="text-blue-600 w-12 h-12" />, top: "20%", left: "70%" },
  { icon: <FaJs className="text-yellow-400 w-12 h-12" />, top: "65%", left: "20%" },
  { icon: <TbBrandTypescript className="text-blue-500 w-12 h-12" />, top: "75%", left: "60%" },
  { icon: <FaReact className="text-cyan-400 w-12 h-12" />, top: "15%", left: "55%" },
  { icon: <TbBrandNextjs className="text-black w-12 h-12" />, top: "50%", left: "85%" },
  { icon: <FaNodeJs className="text-green-500 w-12 h-12" />, top: "35%", left: "25%" },
  { icon: <TbBrandMongodb className="text-green-400 w-12 h-12" />, top: "60%", left: "75%" },
  { icon: <TbBrandCpp className="text-blue-500 w-12 h-12" />, top: "80%", left: "35%" },
  { icon: <FaAws className="text-orange-500 w-12 h-12" />, top: "35%", left: "60%" },
  { icon: <FaDocker className="text-blue-400 w-12 h-12" />, top: "70%", left: "45%" },
  { icon: <FaGit className="text-red-500 w-12 h-12" />, top: "25%", left: "40%" },
  { icon: <FaGithub className="text-gray-800 w-12 h-12" />, top: "55%", left: "10%" },
  { icon: <TbBrandTailwind className="text-sky-400 w-12 h-12" />, top: "85%", left: "75%" },
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