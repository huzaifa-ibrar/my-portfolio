import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "dAIv",
      description: "An AI-powered travel companion using TypeScript, Python, and Supabase to generate real-time travel recommendations and personalized itineraries. Integrated RESTful APIs for live weather, attractions, and transportation updates. Built with a serverless cloud architecture using AWS Lambda, S3, and DynamoDB.",
      image: "",
      tags: ["AI", "TypeScript", "Python", "Supabase", "AWS"],
      github: "https://github.com/Princ3k/daiv-travel-companion",
      live: "https://daiv-travel.io",
      category: "featured"
    },
    {
      id: 2,
      title: "Telecommunications Management System",
      description: "Developed and designed a Python-based system for enhanced customer account, billing, and service management, focusing on scalability and usability with object-oriented principles.",
      image: "",
      tags: ["Python", "OOP"],
      github: "https://github.com/Princ3k/telecom-management",
      category: "backend"
    },
    {
      id: 3,
      title: "Research Project Web Applications",
      description: "Developed secure, interactive web applications for research projects using JavaScript, HTML, and CSS.",
      image: "",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Princ3k/research-web-apps",
      category: "frontend"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Featured', value: 'featured' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' }
  ];

  const getProjectGradient = (id: number) => {
    const gradients = [
      'bg-gradient-to-br from-primary/30 to-secondary/30',
      'bg-gradient-to-br from-accent/30 to-primary/30',
      'bg-gradient-to-br from-secondary/30 to-accent/30',
    ];
    return gradients[(id - 1) % gradients.length];
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-black to-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full filter blur-3xl animate-flow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-secondary/20 rounded-full filter blur-3xl animate-flow" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Projects</h2>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center mb-16 gap-3">
          {filters.map(filter => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                activeFilter === filter.value 
                  ? 'bg-primary text-light' 
                  : 'bg-dark/60 text-light/70 hover:bg-primary/20 hover:text-light'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-dark/60 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 h-full flex flex-col animate-glow shadow-2xl">
                <div className="relative aspect-video overflow-hidden bg-primary/5">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`absolute inset-0 flex items-center justify-center ${getProjectGradient(project.id)}`}>
                      <span className="text-7xl text-light/40 font-bold">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full flex justify-between items-center">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-light hover:text-primary transition-colors duration-300"
                        >
                          <FaGithub className="w-8 h-8" />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-light hover:text-primary transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="w-7 h-7" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-light">{project.title}</h3>
                  <p className="text-light/80 mb-6 text-base flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-1.5 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="https://github.com/Princ3k" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-xl text-light rounded-full hover:bg-primary/90 transition-colors duration-300 animate-glow"
          >
            <FaGithub className="w-6 h-6" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 