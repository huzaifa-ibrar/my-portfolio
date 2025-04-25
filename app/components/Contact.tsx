import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-dark to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-3xl animate-flow"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full filter blur-3xl animate-flow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Get In Touch</h2>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <h3 className="text-3xl font-bold mb-8 text-light">Contact Information</h3>
            <p className="mb-10 text-xl text-light/80">Feel free to reach out for collaboration, job opportunities, or just to say hello!</p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-6 animate-glow">
                  <FaEnvelope className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-medium text-light/90 text-lg mb-1">Email</h4>
                  <a href="mailto:abdul.hannan7474@gmail.com" className="text-primary hover:underline text-xl">abdul.hannan7474@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-6 animate-glow">
                  <FaPhone className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-medium text-light/90 text-lg mb-1">Phone</h4>
                  <a href="tel:+16475717548" className="text-primary hover:underline text-xl">(+1) 647-571-7548</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-6 animate-glow">
                  <FaMapMarkerAlt className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-medium text-light/90 text-lg mb-1">Location</h4>
                  <p className="text-xl text-light/80">Toronto, Canada</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-bold mb-5 text-xl text-light">Connect with me:</h4>
              <div className="flex space-x-6">
                <motion.a 
                  href="https://github.com/huzaifa-ibrar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-7 h-7" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/abdul-hannan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="w-7 h-7" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <div className="bg-dark/60 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-glow">
              <h3 className="text-3xl font-bold mb-8 text-light">Send Me a Message</h3>
              
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium text-light/90 text-lg">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-dark/70 text-light text-lg"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium text-light/90 text-lg">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-dark/70 text-light text-lg"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium text-light/90 text-lg">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-dark/70 text-light text-lg"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block mb-2 font-medium text-light/90 text-lg">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-dark/70 text-light text-lg"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-4 px-6 text-xl text-light bg-primary rounded-lg hover:bg-primary/90 focus:ring-4 focus:ring-primary/50 transition-colors duration-300 animate-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 