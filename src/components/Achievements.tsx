import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { achievements } from '../data/portfolio';

const getAchievementIcon = (index: number) => {
  const icons = [Trophy, Award, Star, Medal];
  return icons[index % icons.length];
};

const getGradient = (index: number) => {
  const gradients = [
    'from-yellow-400 to-orange-400',
    'from-blue-400 to-purple-400',
    'from-pink-400 to-rose-400',
    'from-green-400 to-teal-400'
  ];
  return gradients[index % gradients.length];
};

export const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Awards & <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Recognition for excellence in innovation, design, and technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = getAchievementIcon(index);
              const gradient = getGradient(index);
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-500 group relative overflow-hidden"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  >
                    <IconComponent size={100} className="text-yellow-400" />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${gradient} mb-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-blue-400 font-semibold">{achievement.organization}</p>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{achievement.year}</span>
                    </div>
                    
                    {achievement.prize && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="inline-block px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-400 text-slate-900 rounded-full text-sm font-semibold mb-3"
                      >
                        {achievement.prize}
                      </motion.div>
                    )}
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};