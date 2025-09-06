"use client";
import React, { useEffect, useState } from "react";
import SocialBar from "./components/SocialBar";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import { motion } from "framer-motion";
import Experience from "./components/Experience";
import Education from "./components/Education";
import SkillsSection from "./components/SkillsSection";
import SkillsProgress from "./components/SkillsProgress";
import SkillList from "./components/SkillList";

export default function Portfolio() {
  const sections = [
    {
      id: "home",
      content:
        "I'm a full-stack developer specializing in React, Node.js, and modern web development. I love building interactive web experiences and solving challenging problems.",
    },
    {
      id: "Experience",
      content:
        "Here I share my thoughts, projects, and tutorials. Stay tuned for updates and insights.",
    },
    {
      id: "skills",
      content:
        "I specialize in React, Node.js, Tailwind, Next.js, and other modern web development tools. Always learning and growing.",
    },
    {
      id: "contact",
      content:
        "Want to collaborate or have any questions? Feel free to reach out via email or social links.",
    },
  ];

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollMiddle = window.innerHeight / 2;
      let closestSection = sections[0].id;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;
          const distance = Math.abs(scrollMiddle - sectionMiddle);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section.id;
          }
        }
      });

      setActive(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SocialBar />
      <Navbar active={active} />

      {/* Main Content Wrapper */}
      <div className="w-full ml-0 mr-0 md:ml-14 md:mr-20 mt-[30px] md:mt-0">
        {/* Home */}
        <div className="flex justify-center h-screen items-center">
          <div className="w-[calc(100vw-50px)] h-[calc(100vh-100px)] md:w-[calc(100vw-300px)] md:h-[calc(100vh-100px)] rounded-3xl bg-[#212228]">

            <HomeSection content={sections[0].content} />
          </div>
        </div>

        {/* Blog */}
        <motion.section
          id="Experience"
          className="min-h-screen flex justify-center "
        >
          <div className="w-full flex  flex-col justify-center">
            <Experience></Experience>
            <Education></Education>
          </div>

        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="min-h-screen flex justify-center "
        >
          <div>
            <div className="w-full flex  flex-col justify-center">
              <SkillsSection></SkillsSection>
              <SkillsProgress></SkillsProgress>
              <SkillList></SkillList>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        {/* <motion.section
          id="contact"
          className="min-h-screen flex items-center justify-center text-center"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
              Contact
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-700">
              {sections[3].content}
            </p>
          </div>
        </motion.section> */}
      </div>
    </div>
  );
}
