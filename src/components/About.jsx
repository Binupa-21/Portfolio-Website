import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaFolderOpen, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const About = () => {
  const stats = [
    { id: 1, title: "Year", val: "2nd", icon: <FaCalendarAlt size={24} className="mb-3 text-primary" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 2, title: "Projects", val: "3+ Ongoing", icon: <FaFolderOpen size={24} className="mb-3 text-primary" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 3, title: "Status", val: "Open to Work", icon: <FaBriefcase size={24} className="mb-3 text-primary" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 4, title: "University of Sri Jayewardenepura", val: "Faculty of Engineering", icon: < img src="https://upload.wikimedia.org/wikipedia/en/1/1f/University_of_Sri_Jayewardenepura_crest.png" alt="Universityof Sri jayewardenepura" height="70" width="70" className="mb-3 text-primary" />, colSpan: "col-span-2 md:col-span-3" }
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-transparent text-white py-20 flex items-center">
      <div className="max-w-screen-xl p-6 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase font-mono">// Get to know me</p>
          <h2 className="text-4xl font-extrabold inline-block border-b-4 border-primary mt-1">About Me</h2>
        </div>

        <div className="max-w-3xl mt-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a Computer Engineering undergraduate at the Faculty of Engineering, University of Sri Jayewardenepura, majoring in <span className="text-primary font-bold"> Computer Engineering </span> with a minor in <span className="text-primary font-bold"> High Performance Computing </span>. Passionate about technology, software development, and creative problem-solving, with experience in developing web applications and working on technical projects that combine innovation with practical impact.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Beyond academics, involvement in leadership and media-related initiatives through the Rotaract Club of University of Sri Jayewardenepura has strengthened skills in teamwork, communication, and project coordination. A strong interest in design and digital content creation also led to being recognized as the<span className="text-primary font-bold"> Best Video Editor for the RI Year 2024–25 </span>.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Driven by curiosity and continuous learning, always eager to explore new technologies, take on challenges, and build solutions that create meaningful experiences.
          </p>
        </div>

        {/* Stats / Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {stats.map(({ id, title, val, icon, colSpan }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.02 }}
              className={`bg-[#111111] p-6 md:p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[9rem] shadow-lg ${colSpan}`}
            >
              {icon}
              <h4 className="text-xl md:text-2xl font-bold text-white text-center leading-tight">{val}</h4>
              <p className="text-gray-400 text-xs tracking-wide mt-1 uppercase">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;