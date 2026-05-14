import React from "react";
import { FaExternalLinkAlt, FaAws } from "react-icons/fa";

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
    }
  ];

  return (
    <div name="certifications" className="w-full bg-[#0a0a0a] text-white py-20 border-t border-white/5">
      <div className="max-w-screen-xl p-6 mx-auto flex flex-col justify-center w-full">

        <div className="pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase font-mono">// Continuous learning</p>
          <h2 className="text-4xl font-extrabold inline-block border-b-4 border-primary mt-1">Licenses & Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {certifications.map(({ id, title, issuer, date, link, icon }) => (
            <div
              key={id}
              className="relative bg-[#111111] rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col group shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#161616] p-3 rounded-xl border border-white/5 group-hover:border-primary/30 transition-all duration-300">
                  {icon}
                </div>
                <div>
                  <a href={link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors bg-white/5 p-2 rounded-full inline-flex border border-white/5 hover:bg-white/10">
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 text-white leading-snug">{title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{issuer}</p>

              <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
