import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus } from "react-icons/si";

const Skills = () => {
  const techs = [
    { id: 1, src: <FaHtml5 size={50} />, title: "HTML", style: "shadow-orange-500 text-orange-500" },
    { id: 2, src: <FaCss3Alt size={50} />, title: "CSS", style: "shadow-blue-500 text-blue-500" },
    { id: 3, src: <FaJs size={50} />, title: "JavaScript", style: "shadow-yellow-500 text-yellow-500" },
    { id: 4, src: <FaReact size={50} />, title: "React", style: "shadow-cyan-400 text-cyan-400" },
    { id: 5, src: <SiTailwindcss size={50} />, title: "Tailwind", style: "shadow-sky-400 text-sky-400" },
    { id: 6, src: <FaNodeJs size={50} />, title: "Node JS", style: "shadow-green-500 text-green-500" },
    { id: 7, src: <FaPython size={50} />, title: "Python", style: "shadow-yellow-400 text-yellow-400" },
    { id: 8, src: <FaJava size={50} />, title: "Java", style: "shadow-red-500 text-red-500" },
    { id: 9, src: <SiCplusplus size={50} />, title: "C++", style: "shadow-blue-600 text-blue-600" },
    { id: 10, src: <FaGithub size={50} />, title: "GitHub", style: "shadow-gray-400 text-gray-400" },
  ];

  return (
    <div name="skills" className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-secondary inline">Skills & Tech</p>
          <p className="py-6 text-gray-400">// These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg bg-gray-900 border border-gray-800 ${style}`}
            >
              <div className="flex justify-center mb-4">{src}</div>
              <p className="">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;