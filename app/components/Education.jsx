"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      year: "2018 - 2022",
      title: "Bachelor of Technology (B.Tech)",
      role: "Computer Science - XYZ University",
      desc: "Focused on software engineering, algorithms, and web technologies. Graduated with honors.",
    },
    {
      year: "2016 - 2018",
      title: "Senior Secondary Education",
      role: "ABC High School",
      desc: "Specialized in Physics, Chemistry, and Mathematics. Built my foundation for engineering.",
    },
    {
      year: "2014 - 2016",
      title: "Secondary Education",
      role: "ABC Public School",
      desc: "Completed general secondary studies with focus on science and mathematics.",
    },
  ];

  return (
    <div
      id="education"
      className="
       mt-15
        w-[calc(100vw-50px)] md:w-[calc(100vw-300px)]
        rounded-3xl 
        p-6 md:p-12 mx-auto relative overflow-hidden 
       bg-[#212228]  text-white
      "
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-orange-500">
        My Education
      </h1>




      <div className="relative border-l-4 border-orange-500 ml-6 md:ml-20 space-y-12">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="relative pl-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Circle + Icon */}
            <span className="absolute -left-6 top-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
              <GraduationCap className="text-black w-5 h-5" />
            </span>

            {/* Content */}
            <h2 className="text-xl md:text-2xl font-bold text-white">{edu.title}</h2>
            <h3 className="text-orange-500 font-semibold">{edu.role}</h3>
            <p className="text-sm md:text-base text-white mt-2 max-w-xl">
              {edu.desc}
            </p>
            <span className="text-xs md:text-sm text-gray-200 mt-1 block">
              {edu.year}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
