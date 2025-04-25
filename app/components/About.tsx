import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaAws, FaDocker, 
  FaDatabase, FaGitAlt, FaGithub, FaCode,
  FaFileCode, FaUniversity
} from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiTerraform, SiYaml, SiCplusplus } from 'react-icons/si';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
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
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(220, 38, 38, 0.4)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const skills = [
    // Programming Languages
    { name: 'Python', icon: <FaPython className="w-full h-full" />, category: 'language' },
    { name: 'Java', icon: <FaJava className="w-full h-full" />, category: 'language' },
    { name: 'Git', icon: <FaGitAlt className="w-full h-full" />, category: 'language' },
    { name: 'C++', icon: <SiCplusplus className="w-full h-full" />, category: 'language' },
    { name: 'SQL', icon: <FaDatabase className="w-full h-full" />, category: 'language' },
    
    // DevOps & Cloud
    { name: 'Azure', icon: <SiJenkins className="w-full h-full" />, category: 'devops' },
    { name: 'Terraform', icon: <SiTerraform className="w-full h-full" />, category: 'devops' },
    { name: 'AWS', icon: <FaAws className="w-full h-full" />, category: 'devops' },
    { name: 'Docker', icon: <FaDocker className="w-full h-full" />, category: 'devops' },
    { name: 'Kubernetes', icon: <SiKubernetes className="w-full h-full" />, category: 'devops' },
    { name: 'Jenkins', icon: <FaCode className="w-full h-full" />, category: 'devops' },
    
    // Security & Tools
    { name: 'VMware', icon: <FaDatabase className="w-full h-full" />, category: 'data' },
    { name: 'Wireshark', icon: <FaGitAlt className="w-full h-full" />, category: 'data' },
    { name: 'Splunk', icon: <FaGithub className="w-full h-full" />, category: 'data' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-black to-dark">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="glow1" cx="20%" cy="20%" r="50%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.3)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
              <radialGradient id="glow2" cx="70%" cy="70%" r="60%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.2)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#glow1)" />
            <rect x="0" y="0" width="100" height="100" fill="url(#glow2)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Section - takes 5 columns */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <motion.div
              className="bg-dark/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500"
              whileHover={{
                boxShadow: "0 0 30px rgba(220, 38, 38, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <FaUniversity className="text-primary text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-light">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-2xl font-bold text-primary mb-2">Ontario Tech University</h4>
                    <p className="text-xl text-light/90">Toronto, Canada</p>
                    <p className="font-medium mt-4 text-light/80 text-lg">Bachelor of IT (B.IT) - IT Networking Security</p>
                    <p className="text-light/60 mt-2">Expected Graduation: 2026</p>
                  </motion.div>
                  
                  <div className="mt-8">
                    <h5 className="text-xl font-semibold text-light mb-4">Focus Areas</h5>
                    <div className="flex flex-wrap gap-3">
                      {['IT Networking', 'Cyber Security', 'DevSecOps', 'Cloud Security'].map((area, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + (index * 0.1) }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(220, 38, 38, 0.3)",
                          }}
                        >
                          {area}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-2xl font-bold text-primary mb-2">George Brown College</h4>
                    <p className="text-xl text-light/90">Toronto, Canada</p>
                    <p className="font-medium mt-4 text-light/80 text-lg">College Advanced Diploma - Computer Systems Technology</p>
                    <p className="text-light/60 mt-2">September 2021 - April 2024</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Skills Categories */}
            <div className="mt-12 grid grid-cols-1 gap-6">
              {['Programming Languages', 'DevOps & Cloud', 'Security Practices', 'Software Tools'].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-dark/60 backdrop-blur-sm rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-bold mb-3 text-primary">{category}</h4>
                  <p className="text-light/80">
                    {index === 0 && "Python, Java, Git, C++, SQL"}
                    {index === 1 && "Azure, Jenkins, Terraform, AWS, Docker, Kubernetes"}
                    {index === 2 && "DevSecOps, Cloud Security, Penetration Testing, Network Security"}
                    {index === 3 && "VMware, Wireshark, Splunk, Cisco Packet Tracer"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Skills Section - takes 7 columns */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <div className="bg-dark/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 h-full">
              <div className="p-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <FaCode className="text-primary text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-light">Technical Skills</h3>
                </div>
                
                {/* Filter tabs */}
                <div className="flex flex-wrap gap-4 mb-10">
                  {[
                    { id: 'all', label: 'All Skills' },
                    { id: 'language', label: 'Languages' },
                    { id: 'devops', label: 'DevOps & Cloud' },
                    { id: 'data', label: 'Data & Tools' }
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                        activeCategory === tab.id 
                          ? 'bg-primary text-light shadow-[0_0_15px_rgba(220,38,38,0.5)]' 
                          : 'bg-dark/80 text-light/70 border border-primary/30 hover:border-primary/60'
                      }`}
                      onClick={() => setActiveCategory(tab.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
                
                {/* Skills grid with animation */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
                  variants={containerVariant}
                  initial="hidden"
                  animate="visible"
                  key={activeCategory} // Force re-animation when category changes
                >
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center text-center p-6 rounded-xl bg-dark/80 border border-primary/20 hover:border-primary/50 transition-all duration-300"
                      variants={cardVariants}
                      whileHover="hover"
                      custom={index}
                    >
                      <div className="w-16 h-16 text-primary mb-4 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <h4 className="font-medium text-lg text-light/90">{skill.name}</h4>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 