import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4">
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/Binupa-21" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 duration-200"><FaGithub size={25} /></a>
          <a href="https://www.linkedin.com/in/binupa-ariyarathna-4a98052b9/" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 duration-200"><FaLinkedin size={25} /></a>
          <a href="https://www.instagram.com/binupa.n_/" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 duration-200"><FaInstagram size={25} /></a>
        </div>

        <p className="text-sm font-mono text-center">
          Designed & Built by <span className="text-primary">Binupa Ariyarathna</span> | USJ
        </p>
        <p className="text-xs mt-2 text-gray-600">© 2025 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;