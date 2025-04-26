import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  // State for the typing animation of different roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [currentColor, setCurrentColor] = useState('text-primary');
  const [showContent, setShowContent] = useState(false);
  const [nameText, setNameText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // References
  const nextSectionRef = useRef(null);
  const particlesRef = useRef(null);
  
  // Full name for animation
  const fullName = "Abdul Hannan";
  
  // List of roles to cycle through
  const roles = [
    'IT Networking Security',
    'DevSecOps Engineer',
    'Cloud Security Specialist',
    'Cyber Security Analyst',
    'Network Security Expert'
  ];
  
  // Colors to cycle through for roles
  const colors = [
    'text-primary',
    'text-teal-400',
    'text-teal-300',
    'text-teal-500',
    'text-emerald-400'
  ];

  // Track mouse movement for interactive particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Loading animation effect - randomize characters before settling on the name
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let interval: NodeJS.Timeout | undefined;
    let iteration = 0;
    
    // Only start if not showing content yet
    if (!showContent) {
      interval = setInterval(() => {
        iteration += 1/3;
        const current = Math.floor(iteration);
        
        // Generate random string that gradually morphs into the name
        setNameText(
          fullName
            .split("")
            .map((char, index) => {
              // If the iteration has reached this index, return the correct character
              if (index < current) {
                return char;
              }
              // Otherwise return a random character
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        
        // Once we've reached the full name length plus some extra iterations, clear and show content
        if (iteration >= fullName.length + 10) {
          clearInterval(interval);
          setTimeout(() => setShowContent(true), 500);
        }
      }, 30); // Faster animation
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showContent, fullName]);

  // Find next section on mount
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      nextSectionRef.current = aboutSection;
    }
  }, []);

  // Typing effect for roles
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    const currentRole = roles[roleIndex];
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const waitingTime = 2000; // Pause at full word
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, waitingTime);
    } else if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        const nextIndex = (roleIndex + 1) % roles.length;
        setRoleIndex(nextIndex);
        setCurrentColor(colors[nextIndex]); // Change color with each role
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prevText: string) => prevText.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (displayText === currentRole) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prevText: string) => currentRole.slice(0, prevText.length + 1));
        }, typeSpeed);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayText, isDeleting, isWaiting, roleIndex, roles, colors]);

  // Handle scroll to next section
  const handleScrollToNext = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if next section not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-dark overflow-hidden">
      {/* Interactive particle background */}
      <div className="absolute inset-0 z-0" ref={particlesRef}>
        {Array.from({ length: 120 }).map((_, index) => {
          const size = Math.random() * 6 + 2;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const delay = Math.random() * 3;
          const duration = Math.random() * 15 + 10;
          const opacity = Math.random() * 0.6 + 0.2;
          
          return (
            <motion.div
              key={index}
              className="absolute rounded-full bg-primary/40"
              initial={{
                x: `${initialX}vw`,
                y: `${initialY}vh`,
                width: `${size}px`,
                height: `${size}px`,
                opacity
              }}
              animate={{
                x: [
                  `${initialX}vw`,
                  `${initialX + (Math.random() * 20 - 10)}vw`,
                  `${initialX}vw`
                ],
                y: [
                  `${initialY}vh`,
                  `${initialY + (Math.random() * 20 - 10)}vh`,
                  `${initialY}vh`
                ],
                scale: [1, 1.2, 1],
                opacity: [opacity, opacity * 1.5, opacity]
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
              style={{
                filter: `blur(${Math.random() > 0.8 ? "2px" : "0"})`,
                boxShadow: `0 0 ${size * 2}px rgba(40, 215, 156, ${opacity})`,
              }}
              whileHover={{
                scale: 2,
                opacity: 0.8,
                transition: { duration: 0.3 }
              }}
            />
          );
        })}
      </div>
      
      {/* Mouse follower particle effect */}
      <motion.div
        className="absolute z-0 rounded-full bg-primary/30"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
        style={{
          width: "200px",
          height: "200px",
          filter: "blur(50px)",
          mixBlendMode: "lighten",
        }}
      />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-dark via-dark to-black z-0"></div>
      
      {/* 3D floating elements - geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Tech related floating elements */}
        {Array.from({ length: 8 }).map((_, index) => {
          const shapes = [
            "bg-primary/20 w-16 h-16 rounded-lg rotate-45",
            "border-2 border-primary/30 w-20 h-20 rounded-full",
            "bg-primary/10 w-24 h-12 rounded-lg",
            "border-2 border-primary/20 w-16 h-16 rotate-12",
            "bg-primary/15 w-20 h-20 rounded-lg rotate-[30deg]",
            "border-2 border-primary/25 w-24 h-24 rounded-full",
            "bg-primary/10 w-14 h-14 rounded-xl rotate-[60deg]",
            "border-2 border-primary/15 w-12 h-12 rounded-md"
          ];
          
          const positions = [
            "top-[15%] left-[10%]",
            "top-[25%] right-[5%]",
            "bottom-[20%] left-[15%]",
            "bottom-[30%] right-[15%]",
            "top-[40%] left-[25%]",
            "top-[60%] right-[30%]",
            "bottom-[10%] left-[30%]",
            "top-[75%] right-[20%]"
          ];
          
          return (
            <motion.div
              key={index}
              className={`absolute backdrop-blur-sm ${shapes[index % shapes.length]} ${positions[index % positions.length]}`}
              animate={{
                y: [0, -15, 0, 15, 0],
                rotate: [`${index * 10}deg`, `${index * 10 + 180}deg`],
                scale: [1, 1.05, 1, 0.95, 1]
              }}
              transition={{
                duration: 10 + index * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Initial loading animation */}
        {!showContent ? (
          <motion.div 
            className="text-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold text-light">
              {nameText}
              <span className="animate-pulse text-primary">|</span>
            </h1>
          </motion.div>
        ) : (
          <>
            {/* Left side content */}
            <div className="flex-1 backdrop-blur-sm p-8 rounded-xl bg-dark/20 border border-primary/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-light mb-4"
                  style={{
                    textShadow: '0 0 15px rgba(40, 215, 156, 0.6), 0 0 30px rgba(40, 215, 156, 0.4)'
                  }}>
                  {fullName}
                </h1>
                <div className="flex items-center h-16">
                  <span className={`text-3xl md:text-4xl font-medium ${currentColor}`}>
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
                <div className="flex items-center mt-10 space-x-4 text-lg">
                  <motion.a
                    href="mailto:abdul.hannan7474@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-light hover:text-primary transition-colors"
                  >
                    <FaEnvelope className="mr-2" /> abdul.hannan7474@gmail.com
                  </motion.a>
                </div>
                <div className="flex items-center mt-4 space-x-4 text-lg">
                  <motion.a
                    href="tel:+16475717548" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-light hover:text-primary transition-colors"
                  >
                    <FaPhone className="mr-2" /> +1(647)571-7548
                  </motion.a>
                </div>
                <div className="flex items-center mt-4 space-x-4 text-lg">
                  <motion.span
                    className="flex items-center text-light"
                  >
                    <span className="mr-2">📍</span> Canada
                  </motion.span>
                </div>
                <div className="flex mt-8 space-x-4">
                  <motion.a
                    href="https://linkedin.com/in/abdul-hannan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary/20 hover:bg-primary/30 text-primary rounded-full p-4 transition-all duration-300"
                  >
                    <FaLinkedin className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Princ3k" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary/20 hover:bg-primary/30 text-primary rounded-full p-4 transition-all duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>
                </div>
              </motion.div>
              <motion.button
                onClick={handleScrollToNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10 px-8 py-4 text-lg bg-primary rounded-full text-light font-medium hover:bg-primary/90 transition-colors duration-300 shadow-[0_0_15px_rgba(40,215,156,0.5)]"
              >
                View My Work
              </motion.button>
            </div>
            
            {/* Right side - 3D skill sphere */}
            <motion.div
              className="flex-1 max-w-full md:max-w-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative h-[450px] flex items-center justify-center">
                {/* Interactive 3D Skill sphere */}
                <div className="skill-sphere relative w-[300px] h-[300px]">
                  {/* Core of the sphere */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/30 backdrop-blur-sm z-10 flex items-center justify-center border border-primary/50">
                    <span className="font-bold text-light">Skills</span>
                  </div>
                  
                  {/* Orbiting tech skills */}
                  {["Python", "AWS", "Jenkins", "Docker", "Java", "C++", "DevOps", "CI/CD", "Cloud", "Terraform"].map((skill, index) => {
                    const angle = (index / 10) * Math.PI * 2;
                    const radius = 150;
                    const offsetX = Math.cos(angle) * radius;
                    const offsetY = Math.sin(angle) * radius;
                    const size = Math.random() * 10 + 35;
                    const orbitDuration = 20 + index * 2;
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute top-1/2 left-1/2 flex items-center justify-center"
                        animate={{
                          x: [offsetX, -offsetY * 0.5, -offsetX, offsetY * 0.5, offsetX],
                          y: [offsetY, offsetX * 0.5, -offsetY, -offsetX * 0.5, offsetY],
                          z: [100, -50, -100, 50, 100],
                          scale: [1, 1.2, 1, 0.8, 1]
                        }}
                        transition={{
                          duration: orbitDuration,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <div 
                          className="bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/50 shadow-lg hover:shadow-primary/30 transition-all duration-300"
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                          }}
                        >
                          <p className="text-xs font-medium text-light">{skill}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Glowing orbs around the sphere */}
                {Array.from({ length: 15 }).map((_, index) => {
                  const size = Math.random() * 8 + 4;
                  const distance = Math.random() * 200 + 100;
                  const angle = Math.random() * Math.PI * 2;
                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance;
                  
                  return (
                    <motion.div
                      key={`orb-${index}`}
                      className="absolute rounded-full bg-primary/30"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: "50%",
                        top: "50%",
                        boxShadow: `0 0 ${size * 2}px rgba(40, 215, 156, 0.7)`,
                      }}
                      animate={{
                        x: [x, x + 30, x - 10, x],
                        y: [y, y - 20, y + 40, y],
                        opacity: [0.7, 0.9, 0.6, 0.7]
                      }}
                      transition={{
                        duration: 10 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </div>
      
      {/* Scroll down indicator */}
      {showContent && (
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button 
            onClick={handleScrollToNext}
            className="flex flex-col items-center text-light/70 hover:text-primary transition-colors duration-300"
          >
            <span className="text-base mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-light/30 rounded-full p-1 relative">
              <motion.div 
                className="w-2 h-2 bg-primary rounded-full mx-auto"
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              />
            </div>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Hero; 