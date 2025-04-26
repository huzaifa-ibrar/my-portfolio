import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      company: "Air Liquide",
      position: "Software Engineer Intern",
      location: "Montreal, Canada",
      period: "October 2024 - February 2025",
      achievements: [
        "Developed and maintained internal software applications, contributing to digital transformation initiatives that improved team workflow by reducing manual tasks by 15%.",
        "Designed and implemented RESTful APIs, reducing system integration time by 2-3 hours per deployment and improving data consistency across systems.",
        "Optimized database performance and wrote SQL queries for OracleDB, improving query execution time and ensuring data integrity for business operations."
      ]
    },
    {
      company: "Enumba",
      position: "DevOps Engineer Intern",
      location: "Dubai, UAE",
      period: "July 2024 - October 2024",
      achievements: [
        "Automated application deployments with AWS CodePipeline, reducing manual effort by 40 hours per month and deployment time by 30%.",
        "Managed Amazon S3 for secure data storage, improving data retrieval speeds and reducing storage costs by $2,000 annually.",
        "Deployed and managed containerized applications using Docker, ensuring 100% environmental consistency across development and production.",
        "Streamlined CI/CD pipelines, cutting build times from 45 minutes to 25 minutes and drastically increasing the code integration frequency."
      ]
    },
    {
      company: "Pakistan International Airlines",
      position: "Software Developer Intern",
      location: "Islamabad, Pakistan",
      period: "April 2024 - July 2024",
      achievements: [
        "Improved the PIA website's UI/UX, leading to a 30% increase in mobile traffic and reducing bounce rates by 15%.",
        "Designed and implemented routing APIs, cutting front-end and back-end data exchange time by 25%.",
        "Developed a secure, user-friendly passenger ticketing system, processing 1,000+ bookings per week with a 15% reduction in booking errors."
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative pl-8 md:pl-0"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                {/* Timeline for desktop */}
                <div className="hidden md:block w-48 shrink-0 text-right">
                  <span className="text-primary font-semibold">{exp.period}</span>
                </div>
                
                {/* Timeline connector */}
                <div className="absolute left-0 top-0 h-full md:relative md:w-10 md:shrink-0 flex flex-col items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary">
                    <FaBriefcase className="text-primary" />
                  </div>
                  {index !== experienceData.length - 1 && (
                    <div className="w-0.5 flex-grow bg-primary/20 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-primary/10 flex-grow">
                  <div className="md:hidden mb-2 text-primary font-semibold">{exp.period}</div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <div className="flex items-center mt-1 mb-4">
                    <span className="font-semibold text-primary">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <ul className="space-y-3 list-disc ml-5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 