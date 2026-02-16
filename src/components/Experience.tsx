import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, Code, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolio';

export const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Building innovative solutions through internships and research collaborations
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)'
                }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-500 group"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                          <Building className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                          className="text-slate-300 flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600 hover:border-blue-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};