import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="about" className="py-12 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed text-justify"
          >
            {personalInfo.bio}
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: GraduationCap,
              title: 'Education Excellence',
              description: `Maintaining exceptional academic performance with ${personalInfo.cgpa} CGPA while pursuing BTech in Computer Science & Engineering.`,
              gradient: 'from-blue-400 to-cyan-400'
            },
            {
              icon: Award,
              title: 'Recognition & Awards',
              description: 'Multiple national-level hackathon wins, research publications, and professional certifications in AI and cloud technologies.',
              gradient: 'from-pink-400 to-purple-400'
            },
            {
              icon: Target,
              title: 'Future Goals',
              description: 'Aspiring to become a Software Development Engineer specializing in AI and machine learning solutions for real-world impact.',
              gradient: 'from-purple-400 to-indigo-400'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all duration-500"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.gradient} mb-3`}>
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};