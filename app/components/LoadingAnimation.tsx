import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2.5 }}
      exit={{ display: 'none' }}
    >
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full" 
          style={{transform: 'scale(1.2)'}}></div>
        
        <motion.div
          className="text-6xl md:text-7xl font-bold text-primary relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            textShadow: '0 0 10px rgba(220, 38, 38, 0.7), 0 0 20px rgba(220, 38, 38, 0.5)'
          }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            t
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            i
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            f
          </motion.span>
          <motion.span
            className="inline-block ml-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            K
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            h
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            a
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            n
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation; 