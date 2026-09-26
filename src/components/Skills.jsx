import React from "react";
import { FaHtml5, FaCss3Alt, FaPython, FaJava, FaGithub, FaAws, FaDocker, FaLinux } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Skills = () => {
  const techs = [
    { id: 1, src: <SiCplusplus size={40} />, title: "C++", style: "hover:border-blue-500 hover:text-blue-500" },
    { id: 2, src: <FaJava size={40} />, title: "Java", style: "hover:border-red-500 hover:text-red-500" },
    { id: 3, src: <FaGithub size={40} />, title: "GitHub", style: "hover:border-gray-400 hover:text-gray-400" },
    { id: 4, src: <FaHtml5 size={40} />, title: "HTML", style: "hover:border-orange-500 hover:text-orange-500" },
    { id: 5, src: <FaCss3Alt size={40} />, title: "CSS", style: "hover:border-blue-400 hover:text-blue-400" },
    { id: 6, src: <FaPython size={40} />, title: "Python", style: "hover:border-yellow-400 hover:text-yellow-400" },
    { id: 7, src: <FaAws size={40} />, title: "AWS", style: "hover:border-[#FF9900] hover:text-[#FF9900]" },
    { id: 8, src: <FaLinux size={40} />, title: "Linux", style: "hover:border-white hover:text-white" },
    { id: 9, src: <FaDocker size={40} />, title: "Docker", style: "hover:border-blue-400 hover:text-blue-400" },
  ];

  return (
    <div name="skills" className="w-full bg-transparent text-white py-20 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto p-6 flex flex-col justify-center w-full">

        <div className="pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase font-mono">// Core capabilities</p>
          <h2 className="text-4xl font-extrabold border-b-4 border-primary inline-block mt-1">Skills & Tech</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center py-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`group flex flex-col items-center justify-center py-8 rounded-xl bg-[#111111] border border-white/5 transition-all duration-300 shadow-md ${style}`}
            >
              <div className="text-gray-400 group-hover:scale-110 transition-all duration-300 mb-4">
                {React.cloneElement(src, { className: "transition-colors duration-300" })}
              </div>
              <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;