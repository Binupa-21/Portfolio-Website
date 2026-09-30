import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [

    {
      id: 1,
      title: "AquaSense - A Low-Cost, Long-Life IoT Solution for Continuous Water Quality Monitoring",
      desc: "A floating, battery-powered IoT device that provides continuous, real-time data on pH, TDS, and Turbidity to an app on the users phone, eliminating the need for costly lab visits. Designed for water irrigation researchers to detect hazards like algae blooms, non-point source spills, industrial discharge or E-coli hotspots before they become fatal to aquatic life. ",
      tech: ["ESP32", "PCB Design", "Firebase", "Flutter", "C++"],
      code: "https://github.com/Binupa-21/AquaSense.git",
    },
    {
      id: 2,
      title: "Navix - Know Your Building",
      desc: "Navigation inside large indoor buildings like universities, hospitals, shopping malls is often confusing because traditional GPS does not work inside buildings. NAVIX addresses this issue by AR and spatial mapping. It can guide users through a virtual line rendered on the floor through the device camera. It prioritizes ramps, elevators and wide corridors avoiding stairs.",
      tech: ["Kotlin", "AR Core", "Firebase"],
      code: "https://github.com/Binupa-21/Navix.git"
    },
    {
      id: 3,
      title: "LankaBids:  Car Bidding Platform",
      desc: "Co-founded and engineered a real-time, serverless peer-to-peer automotive auction platform. Designed and deployed a secure, transactional bidding engine featuring database-level Row-Level Security (RLS) integrated with custom Clerk JWT claims, real-time WebSocket state-syncing, automatic anti-sniping timer extensions, and a multi-step financial vetting pipeline with encrypted storage. Optimized for performance and SEO via dynamic Open Graph metadata, dynamic sitemaps, and server-side image compilation, delivering a highly responsive, mobile-first web system.",
      tech: ["Next.js", "Supabase", "PostgreSQL", "Clerk", "TypeScript", "Tailwind", "Vercel", "Cloudflare"],
      code: "https://github.com/Binupa-21/Bids.git",
    },
    {
      id: 4,
      title: "C++ Car Game",
      desc: "A custom high-performance 2D racing game implemented entirely in C++ using the SFML graphics library, utilizing robust object-oriented principles for rendering, fluid animation, collision detection, and custom game physics.",
      tech: ["C++", "SFML", "OOP"],
      code: "https://github.com/Binupa-21/C-car-game.git",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div name="projects" className="w-full bg-transparent text-white py-20 border-t border-white/5">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-screen-xl p-6 mx-auto flex flex-col justify-center w-full"
      >

        {/* Header */}
        <motion.div variants={itemVariants} className="pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase font-mono">// Portfolio</p>
          <h2 className="text-4xl font-extrabold inline-block border-b-4 border-primary mt-1">My Projects</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {projects.map(({ id, title, desc, tech, code, demo }) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              key={id}
              className="bg-[#111111] rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col group shadow-lg"
            >
              {/* Card Header (Icon + Links) */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-3xl text-primary font-mono font-bold">&lt;/&gt;</div>
                <div className="flex gap-4">
                  {code && (
                    <a href={code} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {demo && (
                    <a href={demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-extrabold mb-3 text-white group-hover:text-primary transition-colors duration-300 tracking-tight">{title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {tech.map((t, index) => (
                  <span key={index} className="flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-sm shadow-primary"></span>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;