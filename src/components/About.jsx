import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaFolderOpen, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Typewriter = ({ segments, startTyping }) => {
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!startTyping) return;

    let totalChars = segments.reduce((acc, seg) => acc + seg.text.length, 0);
    let i = 0;
    const interval = setInterval(() => {
      setCharIndex(i);
      i++;
      if (i > totalChars) clearInterval(interval);
    }, 10); // typing speed

    return () => clearInterval(interval);
  }, [segments, startTyping]);

  let renderedChars = 0;

  return (
    <>
      {segments.map((seg, index) => {
        const segStart = renderedChars;
        const segEnd = segStart + seg.text.length;
        renderedChars = segEnd;

        if (charIndex < segStart) return null;

        const displayedText = charIndex >= segEnd
          ? seg.text
          : seg.text.substring(0, charIndex - segStart);

        return (
          <span key={index} className={seg.className || ""}>
            {displayedText}
          </span>
        );
      })}
    </>
  );
};

const About = () => {
  const stats = [
    { id: 1, title: "Year", val: "3rd", icon: <FaCalendarAlt size={24} className="mb-3 text-primary" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 2, title: "Projects", val: "3+", icon: <FaFolderOpen size={24} className="mb-3 text-primary" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 3, title: "Status", val: "Open to Work", icon: <FaBriefcase size={24} className="mb-3 text-primary" />, colSpan: "col-span-2 md:col-span-1" },
    { id: 4, title: "University of Sri Jayewardenepura", val: "Faculty of Engineering", icon: < img src="https://upload.wikimedia.org/wikipedia/en/1/1f/University_of_Sri_Jayewardenepura_crest.png" alt="Universityof Sri jayewardenepura" height="70" width="70" className="mb-3 text-primary" />, colSpan: "col-span-2 md:col-span-3" }
  ];

  const [startTyping, setStartTyping] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div name="about" className="w-full min-h-screen bg-transparent text-white py-20 flex items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-screen-xl p-6 mx-auto flex flex-col justify-center w-full"
      >
        <motion.div variants={itemVariants} className="pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase font-mono">// Get to know me</p>
          <h2 className="text-4xl font-extrabold inline-block border-b-4 border-primary mt-1">About Me</h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-3xl mt-4 min-h-[250px]"
          onViewportEnter={() => setStartTyping(true)}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed min-h-[100px]">
            <Typewriter
              startTyping={startTyping}
              segments={[
                { text: "I am a Computer Engineering undergraduate at the Faculty of Engineering, University of Sri Jayewardenepura, majoring in " },
                { text: "Computer Engineering", className: "text-primary font-bold" },
                { text: " with a minor in " },
                { text: "High Performance Computing", className: "text-primary font-bold" },
                { text: ". Passionate about technology, software development, and creative problem-solving, with experience in developing web applications and working on technical projects that combine innovation with practical impact." }
              ]}
            />
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4 min-h-[85px]">
            <Typewriter
              startTyping={startTyping}
              segments={[
                { text: "Beyond academics, involvement in leadership and media-related initiatives through the Rotaract Club of University of Sri Jayewardenepura has strengthened skills in teamwork, communication, and project coordination. A strong interest in design and digital content creation also led to being recognized as the " },
                { text: "Best Video Editor for the RI Year 2024–25", className: "text-primary font-bold" },
                { text: "." }
              ]}
            />
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4 min-h-[60px]">
            <Typewriter
              startTyping={startTyping}
              segments={[
                { text: "Driven by curiosity and continuous learning, always eager to explore new technologies, take on challenges, and build solutions that create meaningful experiences." }
              ]}
            />
          </p>
        </motion.div>

        {/* Stats / Info Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;