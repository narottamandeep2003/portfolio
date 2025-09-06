"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react"; // nice icon for experience

export default function Experience() {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      role: "Company XYZ",
      desc: "Building scalable web applications with React, Next.js, and Node.js. Focused on performance and UI/UX.",
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      role: "Startup ABC",
      desc: "Developed modern UI components with React & Tailwind, improved accessibility and responsiveness.",
    },
    {
      year: "2019 - 2021",
      title: "Intern",
      role: "Tech Solutions",
      desc: "Worked on small web apps, learned Agile, Git, and collaborated with senior developers.",
    },
  ];

  return (
    <div
      id="experience"
      className="
        w-[calc(100vw-50px)] md:w-[calc(100vw-300px)]
        min-h-screen bg-[#212228] text-white rounded-3xl
        p-6 md:p-12 mx-auto relative overflow-hidden
      "
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
        My Experience
      </h1>

      <div className="relative border-l-4 border-orange-500 ml-6 md:ml-20 space-y-12">
        {experiences.map((exp, i) => (
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
              <Briefcase className="text-white w-5 h-5" />
            </span>

            {/* Content */}
            <h2 className="text-xl md:text-2xl font-bold">{exp.title}</h2>
            <h3 className="text-orange-400 font-semibold">{exp.role}</h3>
            <p className="text-sm md:text-base text-gray-300 mt-2 max-w-xl">
              {exp.desc}
            </p>
            <span className="text-xs md:text-sm text-gray-400 mt-1 block">
              {exp.year}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
