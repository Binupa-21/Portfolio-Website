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
              className="shadow-md shadow-gray-600 rounded-lg p-6 border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:shadow-primary/50 hover:-translate-y-2 duration-300"
            >
              {/* Card Header (Icon + Links) */}
              <div className="flex justify-between items-center mb-4">
                 <div className="text-4xl text-primary">📁</div>
                 <div className="flex gap-4">
                    <a href={code} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><FaGithub size={22}/></a>
                    <a href={demo} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><FaExternalLinkAlt size={20}/></a>
                 </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary duration-300">{title}</h3>
              <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">{desc}</p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map((t, index) => (
                  <span key={index} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
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