import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-light py-16 border-t border-blue-500/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-blue-500 text-3xl">Abdul</span> <span className="text-light text-3xl">Hannan</span>
            </h3>
            <p className="text-light/70 max-w-md text-lg">
              Software Developer specializing in ADAS testing, DevSecOps, cloud architecture, and data engineering
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/huzaifa-ibrar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/70 hover:text-blue-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/abdul-hannan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/70 hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:abdul.hannan7474@gmail.com"
              className="text-light/70 hover:text-blue-500 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-light mb-6">Contact Me</h3>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500 mr-3" />
            <a 
              href="mailto:abdul.hannan7474@gmail.com" 
              className="text-light/80 hover:text-blue-500 transition-colors"
            >
              abdul.hannan7474@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-blue-500 mr-3" />
            <a 
              href="tel:+16475717548" 
              className="text-light/80 hover:text-blue-500 transition-colors"
            >
              +1 (647) 571-7548
            </a>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-500 mr-3" />
            <span className="text-light/80">Toronto, Canada</span>
          </div>
        </div>
        
        <div className="mt-16 text-center text-light/60">
          &copy; {currentYear} Abdul Hannan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 