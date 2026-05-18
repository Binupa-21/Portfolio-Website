import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

import HeroImage from "../assets/hero.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const leftY = useTransform(scrollY, [0, 1000], [0, -150]);
  const rightY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div
      name="home"
      className="min-h-screen w-full bg-transparent text-white pt-28 pb-12 flex items-center"
    >
      <div className="max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-6 gap-12">

        {/* --- Left Side: Text Content & Stats --- */}
        <motion.div style={{ y: leftY }} className="flex flex-col justify-center w-full lg:w-3/5">

          {/* Intro texts */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-lg tracking-wide"
          >
            Hi I am
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-200 mt-1"
          >
            Binupa Ariyarathna
          </motion.h3>

          {/* Huge Role Title in Orange */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-primary tracking-tight mt-2 leading-none"
          >
            Computer Engineer
          </motion.h1>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="https://github.com/Binupa-21"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/binupa-ariyarathna-4a98052b9/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/binupa.n_/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>

          </motion.div>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer bg-primary text-black font-bold px-8 py-3 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-primary/20"
            >
              Contact Me
            </Link>
            {/* Download CV links to document or projects/contact */}
            <a href="https://drive.google.com/file/d/1Uy8GZUzuHTKEobWn0Uy3hKAQ3hEkbR_A/view?usp=drive_link"
              className="cursor-pointer border border-gray-700 text-white font-medium px-8 py-3 rounded-md hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Stats Bar below buttons mirroring Figma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-[#111111] border border-white/5 rounded-xl p-6 max-w-xl"
          >
            <div className="grid grid-cols-3 gap-4 text-center divide-x divide-gray-800">
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-primary">3rd</h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">Year Undergrad</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-primary">3+</h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">Projects</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-primary">100%</h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">Open to Work</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* --- Right Side: Sophisticated Layered Image Frame --- */}
        <motion.div
          style={{ y: rightY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-2/5 flex justify-center items-center relative mt-12 lg:mt-0 py-6"
        >
          {/* Sleek Dark Circular Graphic Backdrop Centered */}
          <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] bg-[#161616] rounded-full border border-white/5 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-inner"></div>

          {/* Subtle Accent Glow behind circle */}
          <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] bg-primary/5 rounded-full blur-3xl z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          {/* Profile Photo without square constraints overlapping the circle */}
          <div className="relative z-10 w-[240px] sm:w-[300px] h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] flex justify-center">
            <img
              src={HeroImage}
              alt="Binupa Ariyarathna"
              className="w-full h-auto object-contain grayscale contrast-110 hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-110 cursor-pointer"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;