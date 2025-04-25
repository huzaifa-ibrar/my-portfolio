import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-light py-16 border-t border-primary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-primary text-3xl">Atif</span> <span className="text-light text-3xl">Khan</span>
            </h3>
            <p className="text-light/70 max-w-md text-lg">
              Software Developer specializing in ADAS testing, DevSecOps, cloud architecture, and data engineering
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Princ3k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/70 hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/atif-khan3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/70 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:atifkhan308@icloud.com"
              className="text-light/70 hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-light/60 text-lg">
            &copy; {currentYear} Atif Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 