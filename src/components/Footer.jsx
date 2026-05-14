import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#0a0a0a] text-gray-500 py-12 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-6">
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/Binupa-21" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/binupa-ariyarathna-4a98052b9/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"><FaLinkedin size={18} /></a>
          <a href="https://www.instagram.com/binupa.n_/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"><FaInstagram size={18} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"><FaTwitter size={18} /></a>
        </div>

        <p className="text-xs font-medium text-center tracking-wide">
          Designed & Built by <span className="text-primary font-bold">Binupa Ariyarathna</span> | USJ
        </p>
        <p className="text-xs mt-2 text-gray-600">© 2026 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;