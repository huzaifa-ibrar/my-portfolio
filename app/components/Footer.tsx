import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-dark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Huzaifa Ibrar. All Rights Reserved.
          </motion.p>
          
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span>Made with</span>
            <FaHeart className="text-primary mx-2 animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 