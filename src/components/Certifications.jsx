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
      icon: <FaAws size={48} className="text-[#FF9900]" />
    },
    {
      id: 2,
      title: "AWS Educate Introduction to Cloud 101 - Training Badge",
      issuer: "Amazon Web Services",
      date: "2026",
      link: "https://www.credly.com/badges/5daa386a-9410-4688-87c6-ba288a7839d0/linked_in_profile",
      icon: <FaAws size={48} className="text-[#FF9900]" />
    }
  ];

  return (
    <div name="certifications" className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Licenses & Certifications</p>
          <p className="py-6 text-gray-400">// My continuous learning journey</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {certifications.map(({ id, title, issuer, date, link, icon }) => (
            <div
              key={id}
              className="relative shadow-lg shadow-black/40 rounded-xl p-6 bg-gray-900 border border-gray-800 hover:border-gray-700 hover:shadow-secondary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Glowing background behind logo */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF9900]/5 rounded-full blur-3xl group-hover:bg-[#FF9900]/10 transition-colors duration-500"></div>

              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9900] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex justify-between items-start mb-6 z-10 relative">
                <div className="bg-gray-800/80 p-3 rounded-xl ring-1 ring-white/5 group-hover:ring-[#FF9900]/30 shadow-inner transition-all duration-300">
                  {icon}
                </div>
                <div>
                  <a href={link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FF9900] transition-colors bg-gray-800/50 p-2.5 rounded-full inline-flex ring-1 ring-white/5 hover:bg-gray-800">
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-white duration-300 tracking-wide text-gray-100 z-10 leading-snug">{title}</h3>
              <p className="text-gray-400 text-sm mb-6 z-10">{issuer}</p>

              <div className="mt-auto flex justify-between items-center z-10">
                <span className="text-xs font-semibold text-[#FF9900] bg-[#FF9900]/10 px-4 py-1.5 rounded-full tracking-wider border border-[#FF9900]/20">
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
