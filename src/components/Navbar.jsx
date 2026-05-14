import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About me" },
    { id: 3, link: "skills", label: "Skills" },
    { id: 4, link: "projects", label: "Portfolio" },
    { id: 5, link: "certifications", label: "Certifications" },
    { id: 6, link: "contact", label: "Contact me" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 max-w-screen-xl mx-auto px-6 text-white bg-[#0a0a0a]/80 backdrop-blur-md fixed z-50 top-0 left-1/2 -translate-x-1/2 border-b border-white/5">
      {/* Logo */}
      <div>
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold tracking-wider text-primary hover:opacity-80 transition-opacity duration-300">
            BINUPA
          </h1>
        </Link>
      </div>

      {/* Desktop Menu Links */}
      <ul className="hidden md:flex items-center space-x-8">
        {links.map(({ id, link, label }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={500}
              spy={true}
              activeClass="text-primary font-bold"
              className="cursor-pointer text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side Call to Action Button */}
      <div className="hidden md:block">
        <Link
          to="contact"
          smooth
          duration={500}
          className="cursor-pointer bg-primary text-black font-bold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-md shadow-primary/20"
        >
          Hire Me
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-gray-400 md:hidden hover:text-primary transition-colors duration-200"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu Dropdown */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0a0a0a] text-gray-400 z-40">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-5 text-2xl font-medium hover:text-primary transition-colors duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-8">
            <Link
              onClick={() => setNav(!nav)}
              to="contact"
              smooth
              duration={500}
              className="bg-primary text-black font-bold text-base px-8 py-3 rounded-full shadow-md shadow-primary/20"
            >
              Hire Me
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;