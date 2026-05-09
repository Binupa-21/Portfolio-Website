import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  // 📝 EDIT THIS ARRAY WITH YOUR REAL PROJECTS LATER
  const projects = [
    {
      id: 1,
      title: "Navix-Know Your Building",
      desc: "Navigation inside large indoor buildings like universities, hospitals, shopping malls is often confusing because traditional GPS does not work inside buildings. NAVIX addreses this issue by AR and spatial mapping. It can guide users through a virtual line rendered on the floor through the device camera. It prioritizes ramps, elevators and wide corridors avoiding stairs.",
      tech: ["Kotlin", "AR Core", "Firebase"],
      code: "https://github.com/Binupa-21/Navix.git"
    },
    {
      id: 2,
      title: "C++ Car game",
      desc: "Full-stack application with user authentication, product management, and Stripe payments.",
      tech: ["C++", "SFML", "OOP"],
      code: "https://github.com/Binupa-21/C-car-game.git",
    },
    {
      id: 3,
      title: "CODENET",
      desc: "A comprehensive platform for developers to showcase, share, and discover coding projects. Built with Spring Boot, MongoDB, Clerk Authentication, and Ballerina webhook services.",
      tech: ["HTML", "CSS", "Java Script"],
      code: "https://github.com/guidance-ss5/Codenet.git",
    },
  ];

  return (
    <div name="projects" className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-primary">My Projects</p>
          <p className="py-6 text-gray-400">// 03. Some things I've built</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, desc, tech, code, demo }) => (
            <div 
              key={id} 
              className="bg-slate-900/50 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Card Header (Icon + Links) */}
              <div className="flex justify-between items-center mb-4">
                 <div className="text-4xl text-primary">📁</div>
                 <div className="flex gap-4">
                    <a href={code} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary hover:scale-110 transition-all duration-200"><FaGithub size={26}/></a>
                    <a href={demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary hover:scale-110 transition-all duration-200"><FaExternalLinkAlt size={22}/></a>
                 </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-extrabold mb-3 text-gray-100 group-hover:text-primary duration-300 tracking-tight">{title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{desc}</p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map((t, index) => (
                  <span key={index} className="flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;