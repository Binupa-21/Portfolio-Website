import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaFolderOpen, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const About = () => {
  const stats = [
    { id: 1, title: "Year", val: "2nd", icon: <FaCalendarAlt size={28} className="mb-3 text-primary/70" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 2, title: "Projects", val: "3+ Ongoing", icon: <FaFolderOpen size={28} className="mb-3 text-primary/70" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 3, title: "Status", val: "Open to Work", icon: <FaBriefcase size={28} className="mb-3 text-primary/70" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 4, title: "University of Sri Jayewardenepura", val: "Faculty  of Engineering", icon: <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/University_of_Sri_Jayewardenepura_crest.png" alt="USJ Logo" className="h-16 w-auto mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />, colSpan: "col-span-2 md:col-span-3" }
  ];

  return (
    <div name="about" className="w-full h-screen bg-transparent text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-secondary">About Me</p>
        </div>

        <p className="text-xl mt-5 text-gray-400">
          I am a second-year <span className="text-primary font-bold">Computer Engineering</span> undergraduate at the University of Sri Jayewardenepura.
          I am passionate about building innovative software solutions and exploring the intersection of hardware and software.
        </p>

        <br />

        <p className="text-xl text-gray-400">
          My journey in tech started with curiosity about how things work. Today, I channel that curiosity into web development,
          embedded systems, and algorithms. I am always looking for new opportunities to learn and grow as a developer.
        </p>

        {/* Stats / Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {stats.map(({ id, title, val, icon, colSpan }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.02 }}
              className={`bg-slate-900/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center min-h-[9rem] ${colSpan}`}
            >
              {icon}
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 break-words whitespace-normal max-w-full leading-tight text-center">{val}</h4>
              <p className="text-gray-400 text-sm mt-2">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;