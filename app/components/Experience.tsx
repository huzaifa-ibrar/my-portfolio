import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaClock, FaMapMarkerAlt, FaChevronRight, FaCheck } from 'react-icons/fa';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const experienceData = [
    {
      company: "General Motors",
      position: "Software Test Engineer Intern - ADAS",
      location: "Toronto, CA",
      period: "Jan 2024 - Oct 2024",
      color: "from-primary to-red-400",
      achievements: [
        "Validated ADAS software, identifying and resolving critical design gaps early in the development cycle, which reduced recall and warranty costs by $1M annually.",
        "Automated 60% of manual testing processes using Python and C++, decreasing testing time by 200 hours annually, improved overall software quality, and reduced critical issue detection time, saving $300,000 in maintenance costs.",
        "Collaborated with Agile teams to improve the reliability of Cadillac's Super Cruise systems (Self-Driving) by 15%, and conducted training sessions to elevate team competencies in ADAS protocols."
      ]
    },
    {
      company: "Intact Financial",
      position: "Software Engineer Intern - DevSecOps",
      location: "Toronto, CA",
      period: "May 2023 - Jan 2024",
      color: "from-red-500 to-rose-400",
      achievements: [
        "Engineered and refined 26 Python, Java, and YAML-based CI/CD pipelines with Jenkins, OpenShift, and Kubernetes, boosting deployment frequency by 35% and slashing time-to-market by 20 days.",
        "Integrated security automation tools (AWS, Synopsys Polaris) into DevOps workflows, lowering security risks by 25%, yielding annual savings of $500,000.",
        "Led security documentation and testing strategies, improving cloud infrastructure resilience across multiple teams."
      ]
    },
    {
      company: "Porter Airlines",
      position: "Airport Service Lead and HubCoordinator",
      location: "Toronto, CA",
      period: "Jun 2023 - Nov 2024",
      color: "from-red-400 to-rose-300",
      achievements: [
        "Led operational improvements that increased on-time flight performance by 80% and reduced delays by 15 minutes per flight, contributing to $500K in annual revenue growth.",
        "Managed over 30 daily flights, optimizing gate turnaround times and team coordination to cut operational costs by $300K annually.",
      ]
    },
    {
      company: "Enterprise Rent-A-Car",
      position: "Senior Customer Service Representative",
      location: "Toronto, CA",
      period: "Jan 2022 - Dec 2022",
      color: "from-rose-400 to-red-300",
      achievements: [
        "Delivered high-quality customer service, managing 50+ daily client interactions to ensure seamless rental experiences, reducing escalations by 30%.",
        "Optimized fleet logistics and vehicle allocation, improving utilization by 15% and reducing customer wait times by 25%."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    },
    expanded: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(220, 38, 38, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };
  
  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };
  
  const iconBoxVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.1, rotate: 10 }
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-dark to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="expGlow1" cx="30%" cy="30%" r="70%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.15)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
              <radialGradient id="expGlow2" cx="70%" cy="70%" r="70%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.1)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#expGlow1)" />
            <rect x="0" y="0" width="100" height="100" fill="url(#expGlow2)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-300">Experience</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-red-300 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden backdrop-blur-sm"
              variants={cardVariants}
              animate={expandedIndex === index ? "expanded" : "visible"}
              whileHover={{ y: -5 }}
              layout
            >
              <div className={`p-1 bg-gradient-to-r ${exp.color}`}></div>
              <div className="bg-dark/80 p-6 md:p-8 relative backdrop-blur-sm border-l border-r border-b border-primary/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Job Position & Company */}
                  <div className="flex-1">
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4"
                        variants={iconBoxVariants}
                        initial="normal"
                        whileHover="hover"
                      >
                        <FaBriefcase className="text-primary text-xl" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-light">{exp.position}</h3>
                        <h4 className="text-xl font-semibold text-primary">{exp.company}</h4>
                      </div>
                    </motion.div>
                    
                    {/* Location and Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-6 text-light/80">
                      <motion.div 
                        className="flex items-center mb-2 sm:mb-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <FaMapMarkerAlt className="text-primary mr-2" />
                        <span>{exp.location}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <FaClock className="text-primary mr-2" />
                        <span>{exp.period}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Toggle Button */}
                  <motion.button
                    className={`self-start mt-2 md:mt-0 px-4 py-2 rounded-full flex items-center ${
                      expandedIndex === index 
                      ? 'bg-primary text-light' 
                      : 'bg-dark/80 text-light/80 border border-primary/30'
                    }`}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedIndex === index ? 'Collapse' : 'Details'}
                    <FaChevronRight 
                      className={`ml-2 transform transition-transform ${expandedIndex === index ? 'rotate-90' : ''}`} 
                    />
                  </motion.button>
                </div>
                
                {/* Achievements */}
                <motion.div
                  className="mt-6 space-y-4 overflow-hidden"
                  animate={{ 
                    height: expandedIndex === index ? 'auto' : '0',
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h5 className="text-xl font-semibold text-light mb-4">Key Achievements</h5>
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex"
                        variants={achievementVariants}
                        initial="hidden"
                        animate={expandedIndex === index ? "visible" : "hidden"}
                        custom={i}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-primary mt-1 mr-3 flex-shrink-0">
                          <FaCheck />
                        </span>
                        <span className="text-light/90">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-20 h-20 rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-2xl"></div>
                <div className="absolute bottom-2 left-2 w-16 h-16 rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 