import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAws, FaMicrosoft, FaBrain } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Educate Getting Started With Storage - Training Badge",
      issuer: "Amazon Web Services",
      date: "2026",
      link: "https://www.credly.com/badges/81eeac6d-3fba-4b54-b859-d950b05d936c/linked_in_profile",
      icon: <FaAws size={40} className="text-[#FF9900]" />
    },
    {
      id: 2,
      title: "AWS Educate Introduction to Cloud 101 - Training Badge",
      issuer: "Amazon Web Services",
      date: "2026",
      link: "https://www.credly.com/badges/5daa386a-9410-4688-87c6-ba288a7839d0/linked_in_profile",
      icon: <FaAws size={40} className="text-[#FF9900]" />
    },

    {
      id: 3,
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      issuer: "Amazon Web Services",
      date: "September 2026",
      link: "https://www.credly.com/badges/5daa386a-9410-4688-87c6-ba288a7839d0/linked_in_profile",
      icon: <FaAws size={40} className="text-[#FF9900]" />
    },

    {
      id: 4,
      title: "Claude 101",
      issuer: "Anthropic",
      date: "June 2026",
      link: "https://verify.skilljar.com/c/yp5z3qbpgpd8",
      icon: <FaBrain size={40} className="text-[#D4C5B9]" />
    },

    {
      id: 5,
      title: "AI Skills Fest 2026",
      issuer: "Microsoft",
      date: "June 2026",
      link: "https://www.credly.com/badges/fc1c0f78-6faa-4049-af44-651a6f96be6b/linked_in_profile",
      icon: <FaMicrosoft size={40} className="text-[#00A4EF]" />
    }
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
    <div name="certifications" className="w-full bg-transparent text-white py-20 border-t border-white/5">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-screen-xl p-6 mx-auto flex flex-col justify-center w-full"
      >

        <motion.div variants={itemVariants} className="pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase font-mono">// Continuous learning</p>
          <h2 className="text-4xl font-extrabold inline-block border-b-4 border-primary mt-1">Licenses & Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {certifications.map(({ id, title, issuer, date, link, icon }) => (
            <motion.div
              variants={itemVariants}
              key={id}
              className="relative bg-gradient-to-br from-[#161616] to-[#0a0a0a] rounded-xl p-6 border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 flex flex-col group overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="bg-[#1a1a1a] p-3 rounded-xl border border-white/5 group-hover:border-primary/40 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
                  {icon}
                </div>
                <div>
                  <a href={link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all duration-300 bg-white/5 p-2 rounded-full inline-flex border border-white/5 hover:bg-white/10 hover:scale-110">
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 text-white leading-snug relative z-10">{title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10">{issuer}</p>

              <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;
