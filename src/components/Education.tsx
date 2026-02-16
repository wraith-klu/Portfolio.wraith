import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Education = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Academic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Pursuing excellence in Computer Science & Engineering
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400" />

              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)'
                }}
                className="relative pl-20 pb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full z-10"
                />

                <motion.div
                  initial={{ opacity: 0, rotateY: -15 }}
                  animate={inView ? { opacity: 1, rotateY: 0 } : {}}
                  transition={{ duration: 1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Bachelor of Technology
                        </h3>
                        <p className="text-blue-400 font-semibold">Computer Science & Engineering</p>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="md:ml-auto px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-lg font-bold flex items-center gap-2"
                    >
                      <Award size={16} />
                      CGPA: {personalInfo.cgpa}
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin size={20} className="text-blue-400" />
                      <span>{personalInfo.university}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Calendar size={20} className="text-purple-400" />
                      <span>{personalInfo.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                    {[
                      'Maintaining exceptional academic performance with 9.61/10 CGPA',
                      'Specializing in AI-Driven Language Technology',
                      'Built multiple production-ready AI and backend systems',
                      'Solved 500+ DSA problems across major coding platforms'
                    ].map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};