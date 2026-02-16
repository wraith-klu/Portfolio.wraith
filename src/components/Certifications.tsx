import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { certifications } from '../data/portfolio';

export const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.3)'
                }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-500 group relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute top-2 right-2 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                >
                  <Award size={80} className="text-green-400" />
                </motion.div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg"
                    >
                      <CheckCircle className="text-white" size={20} />
                    </motion.div>
                    <span className="text-green-400 font-semibold text-sm">{cert.year}</span>
                  </div>
                  
                  <h3 className="text-white font-bold mb-2 group-hover:text-green-400 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                  
                  {cert.url && (
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={14} />
                      Verify
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};