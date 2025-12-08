import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile-photo.jpg.jpg";

const About = () => {
  const stats = [
    { title: "Experience", val: "2+ Years" },
    { title: "Projects", val: "5+ Built" },
    { title: "University", val: (<><span className="block">Sri</span><span className="block whitespace-nowrap">Jayawardenepura</span></>) },
    { title: "Status", val: "Open to Work" }
  ];

  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="w-full md:flex md:items-start md:gap-8">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
            <img src={profile} alt="Profile" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg" />
          </div>

          <div className="w-full md:w-2/3">
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
          </div>
        </div>

        {/* Stats / Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 md:p-8 rounded-lg border border-gray-700 hover:border-primary duration-300 text-center flex flex-col items-center justify-center min-h-[9rem]"
            >
              {item.title === 'University' ? (
                <h4 className="text-xl md:text-2xl font-bold text-primary leading-tight">{item.val}</h4>
              ) : (
                <h4 className="text-lg md:text-2xl lg:text-3xl font-bold text-primary break-words whitespace-normal max-w-full leading-tight">{item.val}</h4>
              )}
              <p className="text-gray-400 text-sm mt-2">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;