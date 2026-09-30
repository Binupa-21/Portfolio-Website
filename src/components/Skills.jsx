import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPython, FaJava, FaGithub, FaAws, FaDocker, FaLinux } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Skills = () => {
  const techs = [
    { id: 1, src: <SiCplusplus size={40} />, title: "C++", style: "hover:border-[#00599C] hover:text-[#00599C]" },
    { id: 2, src: <FaJava size={40} />, title: "Java", style: "hover:border-[#f89820] hover:text-[#f89820]" },
    { id: 3, src: <FaGithub size={40} />, title: "GitHub", style: "hover:border-[#ffffff] hover:text-[#ffffff]" },
    { id: 4, src: <FaHtml5 size={40} />, title: "HTML", style: "hover:border-[#E34F26] hover:text-[#E34F26]" },
    { id: 5, src: <FaCss3Alt size={40} />, title: "CSS", style: "hover:border-[#1572B6] hover:text-[#1572B6]" },
    { id: 6, src: <FaPython size={40} />, title: "Python", style: "hover:border-[#FFD43B] hover:text-[#FFD43B]" },
    { id: 7, src: <FaAws size={40} />, title: "AWS", style: "hover:border-[#FF9900] hover:text-[#FF9900]" },
    { id: 8, src: <FaLinux size={40} />, title: "Linux", style: "hover:border-[#FCC624] hover:text-[#FCC624]" },
    { id: 9, src: <FaDocker size={40} />, title: "Docker", style: "hover:border-[#2496ED] hover:text-[#2496ED]" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
  };

  return (
    <div name="skills" className="w-full bg-transparent text-white py-20 border-t border-white/5">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-screen-xl mx-auto p-6 flex flex-col justify-center w-full"
      >

        <motion.div variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase font-mono">// Core capabilities</p>
          <h2 className="text-4xl font-extrabold border-b-4 border-primary inline-block mt-1">Skills & Tech</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center py-8">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              key={id}
              className={`group flex flex-col items-center justify-center py-8 rounded-xl bg-[#111111] border border-white/5 transition-all duration-300 shadow-md ${style}`}
            >
              <div className="text-gray-400 group-hover:scale-110 transition-all duration-300 mb-4">
                {React.cloneElement(src, { className: "transition-colors duration-300" })}
              </div>
              <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;