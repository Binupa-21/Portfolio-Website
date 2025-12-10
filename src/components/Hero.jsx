import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import HeroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        {/* --- Left Side: Text Content --- */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          
          {/* Terminal Badge Animation */}
          

          {/* Main Heading Animation */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Binupa Ariyarathna</span>
          </motion.h2>

          {/* Subtext Animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 py-4 max-w-md font-mono"
          >
            Computer Engineering Undergraduate | USJ
            <br />
            Building innovative solutions with code.
          </motion.p>

          {/* Buttons Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex gap-4"
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-black font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary to-cyan-400 cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-primary/30"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md border border-gray-600 hover:border-primary cursor-pointer hover:bg-gray-900 duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* --- Right Side: Image/Graphics --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>

          {/* 👇 REAL PHOTO DISPLAY */}
          <div className="relative z-10 w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl shadow-primary/20">
             <img 
               src={HeroImage} 
               alt="My Profile" 
               className="w-full h-full object-cover hover:scale-105 duration-500" 
             />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;