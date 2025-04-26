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
  
  // References
  const nextSectionRef = useRef(null);
  
  // Full name for animation
  const fullName = "Huzaifa Ibrar";
  
  // List of roles to cycle through
  const roles = [
    'Software Developer',
    'Full Stack Engineer',
    'DevOps Specialist',
    'Cloud Engineer',
    'React Developer'
  ];
  
  // Colors to cycle through for roles
  const colors = [
    'text-primary',
    'text-yellow-400',
    'text-green-400',
    'text-blue-400',
    'text-purple-500'
  ];

  // Loading animation effect - randomize characters before settling on the name
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let interval: NodeJS.Timeout;
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

  // Code snippet with syntax highlighting classes - duplicated for continuous loop
  const codeSnippet = `// Huzaifa Ibrar
// <span class="text-yellow-400">Software Developer</span>

<span class="text-blue-400">class</span> <span class="text-green-400">Developer</span> {
  <span class="text-blue-400">constructor</span>() {
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">name</span> = <span class="text-green-400">"Huzaifa Ibrar"</span>;
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">role</span> = <span class="text-green-400">"Software Developer"</span>;
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">languages</span> = [<span class="text-green-400">"Java"</span>, <span class="text-green-400">"Python"</span>, 
      <span class="text-green-400">"JavaScript"</span>, <span class="text-green-400">"TypeScript"</span>, <span class="text-green-400">"C"</span>];
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">frameworks</span> = [<span class="text-green-400">"React"</span>, <span class="text-green-400">"Express"</span>, 
      <span class="text-green-400">"Bootstrap"</span>];
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">databases</span> = [<span class="text-green-400">"MongoDB"</span>, <span class="text-green-400">"MySQL"</span>, 
      <span class="text-green-400">"OracleDB"</span>];
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">devOps</span> = [<span class="text-green-400">"AWS"</span>, <span class="text-green-400">"Docker"</span>, 
      <span class="text-green-400">"Kubernetes"</span>, <span class="text-green-400">"GitAction"</span>];
  }

  <span class="text-yellow-400">createCode</span>() {
    <span class="text-gray-500">// Building amazing things...</span>
    <span class="text-blue-400">return</span> <span class="text-green-400">"Clean, robust solutions"</span>;
  }
}

<span class="text-blue-400">function</span> <span class="text-green-400">buildProject</span>() {
  <span class="text-blue-400">const</span> <span class="text-yellow-400">developer</span> = <span class="text-blue-400">new</span> <span class="text-green-400">Developer</span>();
  <span class="text-blue-400">const</span> <span class="text-yellow-400">code</span> = developer.<span class="text-yellow-400">createCode</span>();
  <span class="text-blue-400">return</span> {
    <span class="text-yellow-400">quality</span>: <span class="text-green-400">"high"</span>,
    <span class="text-yellow-400">maintainable</span>: <span class="text-blue-400">true</span>,
    <span class="text-yellow-400">scalable</span>: <span class="text-blue-400">true</span>,
    <span class="text-yellow-400">result</span>: code
  };
}

<span class="text-gray-500">// Execute and deploy</span>
<span class="text-blue-400">const</span> <span class="text-yellow-400">project</span> = <span class="text-green-400">buildProject</span>();
<span class="text-blue-400">const</span> <span class="text-yellow-400">success</span> = <span class="text-blue-400">true</span>;

// Huzaifa Ibrar
// <span class="text-yellow-400">Software Developer</span>

<span class="text-blue-400">class</span> <span class="text-green-400">Developer</span> {
  <span class="text-blue-400">constructor</span>() {
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">name</span> = <span class="text-green-400">"Huzaifa Ibrar"</span>;
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">role</span> = <span class="text-green-400">"Software Developer"</span>;
    <span class="text-purple-400">this</span>.<span class="text-yellow-400">languages</span> = [<span class="text-green-400">"Java"</span>, <span class="text-green-400">"Python"</span>, 
      <span class="text-green-400">"JavaScript"</span>, <span class="text-green-400">"TypeScript"</span>, <span class="text-green-400">"C"</span>];
  }
}`;

  // Find next section on mount
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      nextSectionRef.current = aboutSection;
    }
  }, []);

  // Typing effect for roles
  useEffect(() => {
    let timeout: NodeJS.Timeout;
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

    return () => clearTimeout(timeout);
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

  // Animation for typing code
  const codeTypingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.03,
        delayChildren: 4.5
      }
    }
  };

  // Loading animation variants
  const initialLoadingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  // Text animation variants for enhanced intro
  const introTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 3.2
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotate: 10
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Generate stars for the background (falling animation)
  const fallingStars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 2,
    opacity: Math.random() * 0.7 + 0.3
  }));

  return (
    <>
      {/* Initial Loading Animation */}
      {!showContent && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-dark z-50 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={initialLoadingVariants}
        >
          {/* Falling stars background */}
          {fallingStars.map(star => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.left}%`,
                top: '-20px',
                opacity: star.opacity
              }}
              animate={{
                y: ['0vh', '120vh'],
                opacity: [0, star.opacity, 0]
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Main Name Animation */}
          <motion.div 
            className="text-center relative z-10 px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-[12vw] md:text-[15vw] font-bold relative"
              animate={{ 
                filter: ['drop-shadow(0 0 20px rgba(74, 222, 128, 0.5))', 'drop-shadow(0 0 60px rgba(139, 92, 246, 0.7))', 'drop-shadow(0 0 20px rgba(74, 222, 128, 0.5))'],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-pulse">
                {nameText || "H"}
              </span>
            </motion.div>
            
            <motion.div 
              className="text-3xl md:text-5xl text-light mt-8 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.7, 1],
                y: [10, 0],
                filter: ['drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))', 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))', 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'],
              }}
              transition={{ 
                delay: 1, 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              Portfolio
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <section id="home" className="relative h-screen flex items-center">
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <motion.div
                className="loading-animation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3 }}
              >
                <motion.p 
                  className="text-primary font-medium mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.2 }}
                >
                  Hello, I'm
                </motion.p>
                
                {/* Animated name with letter-by-letter animation */}
                <motion.div
                  className="overflow-hidden"
                  variants={introTextVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex">
                    {"Huzaifa Ibrar".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className={`text-5xl sm:text-6xl md:text-8xl font-bold ${char === " " ? "mr-4" : ""}`}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.h2 
                  className="text-2xl sm:text-3xl font-semibold mb-6 h-10 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.6 }}
                >
                  <span className={currentColor}>{displayText}</span>
                  <span className="inline-block w-1 h-8 bg-primary ml-1 animate-pulse"></span>
                </motion.h2>
                <motion.p 
                  className="text-lg mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.8 }}
                >
                  Full-stack developer with expertise in React, Express, and DevOps technologies. Building robust, scalable applications with modern tech stacks.
                </motion.p>
                
                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 4 }}
                >
                  <motion.a 
                    href="https://github.com/huzaifa-ibrar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-dark/80 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com/in/huzaifa-ibrar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-dark/80 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="mailto:huzaifa.57@hotmail.com"
                    className="w-12 h-12 rounded-full bg-dark/80 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="tel:+16475724056"
                    className="w-12 h-12 rounded-full bg-dark/80 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPhone className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="md:w-2/5">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 4.2 }}
              >
                {/* Continuous looping code display */}
                <div className="w-full h-80 bg-dark/80 rounded-lg p-6 backdrop-blur-sm border border-primary/20 overflow-hidden">
                  <div className="h-full relative overflow-hidden">
                    <motion.div
                      animate={{ 
                        y: ["0%", "-100%"]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                      }}
                      className="will-change-transform"
                    >
                      <motion.pre 
                        className="text-xs sm:text-sm text-light font-mono"
                        variants={codeTypingVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <code 
                          className="font-mono whitespace-pre"
                          dangerouslySetInnerHTML={{ __html: codeSnippet }}
                        />
                      </motion.pre>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator - moved to bottom of hero section */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 z-10 flex flex-col items-center">
            <motion.button
              className="flex flex-col items-center focus:outline-none"
              onClick={handleScrollToNext}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm mb-2 text-light hover:text-primary transition-colors">
                Scroll Down
              </span>
              <div className="w-6 h-10 border-2 border-light hover:border-primary rounded-full flex justify-center p-1 transition-colors">
                <motion.div 
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                  animate={{ 
                    y: [0, 12, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 