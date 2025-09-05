"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function HomeSection({ content }) {
  return (
    <motion.section
      id="home"
      className="h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-center md:text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start justify-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
            Hi, I'm Aastha
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-md">
            {content}
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all text-sm sm:text-base"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-5 py-2 sm:px-6 sm:py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
            transitionSpeed={400}
          >
            <img
              src="https://images.pexels.com/photos/33669673/pexels-photo-33669673.jpeg"
              alt="Profile"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </Tilt>
        </motion.div>
      </div>
    </motion.section>
  );
}
