"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Home,
  BookOpen,
  Code,
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Portfolio() {
  const sections = [
    {
      id: "home",
      title: "Home",
      icon: <Home size={20} />,
      content:
        "I'm a full-stack developer specializing in React, Node.js, and modern web development. I love building interactive web experiences and solving challenging problems.",
    },
    {
      id: "blog",
      title: "Blog",
      icon: <BookOpen size={20} />,
      content:
        "Here I share my thoughts, projects, and tutorials. Stay tuned for updates and insights.",
    },
    {
      id: "skills",
      title: "Skills",
      icon: <Code size={20} />,
      content:
        "I specialize in React, Node.js, Tailwind, Next.js, and other modern web development tools. Always learning and growing.",
    },
    {
      id: "contact",
      title: "Contact",
      icon: <Mail size={20} />,
      content:
        "Want to collaborate or have any questions? Feel free to reach out via email or social links.",
    },
  ];

  const [active, setActive] = useState("home");

  // Detect active section by scroll
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
    handleScroll(); // initialize active state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-orange-50 to-red-50 min-h-screen">
      {/* Left-side Social Icons */}
      <div className="fixed top-0 left-0 h-full w-14 bg-gradient-to-b from-orange-600 to-red-700 text-white flex flex-col items-center justify-center space-y-6 shadow-lg z-10">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <Github className="hover:text-yellow-300 transition-colors" size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <Linkedin className="hover:text-yellow-300 transition-colors" size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram className="hover:text-yellow-300 transition-colors" size={24} />
        </a>
      </div>

      {/* Right-side Navbar */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 h-auto w-20 bg-gradient-to-b from-orange-600 to-red-700 text-white flex flex-col items-center justify-center space-y-6 shadow-lg p-2 rounded-l-lg z-10">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
              active === section.id
                ? "bg-gradient-to-tr from-orange-500 to-red-500 border-orange-500 text-white shadow-lg scale-110"
                : "border-orange-300 text-orange-200 hover:border-orange-400 hover:text-orange-100"
            }`}
          >
            {section.icon}
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-14 mr-20 w-full">
        {sections.map((section, idx) => (
          <motion.section
            id={section.id}
            key={section.id}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-center md:text-left scroll-mt-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Home Section */}
            {section.id === "home" ? (
              <>
                <motion.div
                  className="flex-1 flex flex-col items-start justify-center space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
                    Hi, I'm Aastha
                  </h1>
                  <p className="text-lg md:text-xl text-gray-800 max-w-md">
                    {section.content}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href="/resume.pdf"
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all"
                    >
                      Download CV
                    </a>
                    <a
                      href="#contact"
                      className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all"
                    >
                      Contact Me
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1 mt-10 md:mt-0 flex justify-center items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Tilt
                    className="w-64 h-64 md:w-96 md:h-96"
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.3}
                    scale={1.05}
                    transitionSpeed={400}
                  >
                    <img
                      src="https://images.pexels.com/photos/33669673/pexels-photo-33669673.jpeg" // Replace with your image
                      alt="Profile"
                      className="w-full h-full object-cover rounded-xl shadow-2xl"
                    />
                  </Tilt>
                </motion.div>
              </>
            ) : (
              // Other Sections
              <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
                  {section.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl text-gray-800">
                  {section.content}
                </p>
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
