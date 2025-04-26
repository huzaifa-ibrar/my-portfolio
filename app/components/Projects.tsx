import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaJava } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiDocker, SiKubernetes, SiArgo } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "Car Loan System",
      description: "Built a JavaFX application with MongoDB for secure user authentication and data storage. Developed features for loan exploration, inputting details, and tracking loan history. Designed a database schema to manage vehicles, user records, and financial data.",
      techs: ["JavaFX", "MongoDB", "Maven"],
      date: "February 2025",
      icons: [<FaJava key="javafx" className="text-primary text-2xl" />, <SiMongodb key="mongodb" className="text-primary text-2xl" />],
      github: "https://github.com/huzaifa-ibrar/car-loan-system",
      live: ""
    },
    {
      title: "Library Management System",
      description: "Developed a full-stack web application using JavaScript, MongoDB, HTML/CSS, and additional frameworks. Implemented role-based authentication, providing administrators, staff, and regular users with tailored access and menus.",
      techs: ["JavaScript", "MongoDB", "HTML/CSS"],
      date: "November 2024",
      icons: [<SiJavascript key="js" className="text-primary text-2xl" />, <SiMongodb key="mongodb" className="text-primary text-2xl" />],
      github: "https://github.com/huzaifa-ibrar/library-management",
      live: ""
    },
    {
      title: "Kubernetes GitOps Pipeline with Argo",
      description: "Built a GitOps-based CI/CD pipeline with Argo CD, Rollouts, and Workflows for automated Kubernetes deployments. Implemented Canary and Blue-Green deployments with auto rollbacks triggered by Git commits and Docker updates.",
      techs: ["JavaScript", "MongoDB", "Kubernetes", "Argo CD"],
      date: "November 2024",
      icons: [<SiJavascript key="js" className="text-primary text-2xl" />, <SiKubernetes key="k8s" className="text-primary text-2xl" />, <SiArgo key="argo" className="text-primary text-2xl" />],
      github: "https://github.com/huzaifa-ibrar/k8s-gitops-pipeline",
      live: ""
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-primary/10 flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    {project.icons.map((icon, i) => (
                      <React.Fragment key={i}>{icon}</React.Fragment>
                    ))}
                  </div>
                  <span className="text-sm text-primary font-medium">{project.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-primary/10 flex justify-between">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/70 transition-colors"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/70 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 