import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaReact, FaBootstrap, FaNodeJs, FaAws, FaDocker, 
  FaDatabase, FaGitAlt, FaGithub, FaCss3Alt, FaHtml5, FaJs, FaCode
} from 'react-icons/fa';
import { SiKubernetes, SiExpress, SiMongodb, SiMysql, SiOracle, SiTypescript } from 'react-icons/si';

const About = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    { name: 'Java', icon: <FaJava className="w-8 h-8" /> },
    { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" /> },
    { name: 'C', icon: <FaCode className="w-8 h-8" /> },
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" /> },
    { name: 'React', icon: <FaReact className="w-8 h-8" /> },
    { name: 'Express', icon: <SiExpress className="w-8 h-8" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="w-8 h-8" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" /> },
    { name: 'MySQL', icon: <SiMysql className="w-8 h-8" /> },
    { name: 'OracleDB', icon: <SiOracle className="w-8 h-8" /> },
    { name: 'AWS', icon: <FaAws className="w-8 h-8" /> },
    { name: 'Docker', icon: <FaDocker className="w-8 h-8" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="w-8 h-8" /> },
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8" /> },
    { name: 'GitHub', icon: <FaGithub className="w-8 h-8" /> },
  ];

  return (
    <section id="about" className="py-20 bg-dark/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            className="order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold">🎓</span>
              </span>
              Education
            </h3>
            <div className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-primary/10">
              <h4 className="text-xl font-bold text-primary">Seneca College</h4>
              <p className="text-lg">Toronto, Canada</p>
              <p className="font-medium mt-2">Bachelor of Science - CPA Computer Programming and Analysis</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Programming</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Software Development</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Data Structures</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Algorithms</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Database Design</span>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold">💻</span>
              </span>
              Technical Skills
            </h3>
            <div className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-primary/10">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-primary mb-2">{skill.icon}</div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 