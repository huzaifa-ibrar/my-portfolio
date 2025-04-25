import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaShieldAlt, FaSearchPlus } from 'react-icons/fa';
import { SiAmazonaws, SiMicrosoftazure, SiElastic } from 'react-icons/si';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  icon: JSX.Element;
  achievements: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: ProjectProps[] = [
    {
      title: 'Deploying a Web Application Firewall (WAF)',
      description: 'Configured WAF on AWS, Azure, and GCP to protect web applications against common attacks.',
      technologies: ['AWS', 'Azure', 'GCP', 'NIST Framework'],
      icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
      achievements: [
        'Blocked 95% of SQL injection and XSS attacks',
        'Simulated 50+ attacks to validate security',
        'Implemented compliance with NIST Framework'
      ]
    },
    {
      title: 'Build Your Own VPN Server with IDS',
      description: 'Deployed OpenVPN on AWS/DigitalOcean and integrated with Intrusion Detection System.',
      technologies: ['OpenVPN', 'AWS', 'DigitalOcean', 'Snort', 'Suricata'],
      icon: <FaServer className="w-8 h-8 text-primary" />,
      achievements: [
        'Supported 500+ users, boosting privacy by 40%',
        'Integrated IDS to detect 30+ threats',
        'Reduced the attack surface by 25%'
      ]
    },
    {
      title: 'Building a SIEM System',
      description: 'Built a Security Information and Event Management system using the Elastic Stack.',
      technologies: ['Elastic Stack', 'Security Analytics', 'Dashboards'],
      icon: <SiElastic className="w-8 h-8 text-primary" />,
      achievements: [
        'Analyzed 10,000+ security events daily',
        'Designed 5+ real-time dashboards',
        'Improved threat detection by 30% and response time by 20%'
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    selected: {
      scale: 1.02,
      boxShadow: "0 0 30px rgba(64, 224, 208, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-gradient-to-b from-black to-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="projectGlow1" cx="20%" cy="30%" r="60%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(64, 224, 208, 0.15)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
              <radialGradient id="projectGlow2" cx="80%" cy="70%" r="50%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(64, 224, 208, 0.1)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#projectGlow1)" />
            <rect x="0" y="0" width="100" height="100" fill="url(#projectGlow2)" />
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-300">Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-300 mx-auto"></div>
          <p className="text-light/80 mt-6 max-w-3xl mx-auto text-lg">
            Showcasing my expertise in IT security through practical implementations and solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark/60 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              animate={selectedProject === index ? "selected" : "visible"}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="p-1 bg-gradient-to-r from-primary/80 to-teal-400/80"></div>
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-light">{project.title}</h3>
                </div>
                
                <p className="text-light/80 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      variants={techBadgeVariants}
                      custom={i}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div
                  className={`overflow-hidden transition-all duration-300 ${selectedProject === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <h4 className="font-bold text-light mb-4 flex items-center">
                    <FaSearchPlus className="mr-2 text-primary" /> Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        variants={achievementVariants}
                        initial="hidden"
                        animate={selectedProject === index ? "visible" : "hidden"}
                        custom={i}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-light/80">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <div className="mt-6 text-center">
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedProject === index 
                        ? 'bg-primary text-dark' 
                        : 'bg-transparent border border-primary/30 text-primary hover:bg-primary/10'
                    }`}
                  >
                    {selectedProject === index ? 'Close Details' : 'View Achievements'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 