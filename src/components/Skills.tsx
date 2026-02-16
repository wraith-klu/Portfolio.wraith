import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Brain,
  Wrench,
  Database,
  Cpu,
  Globe,
  Palette,
  Terminal,
  Zap,
  Layers,
  GitBranch
} from 'lucide-react';
import { skills } from '../data/portfolio';

const skillIcons: Record<string, any> = {
  'Python': Code,
  'Java': Cpu,
  'JavaScript': Globe,
  'TypeScript': Code,
  'React': Layers,
  'Next.js': Globe,
  'Flask': Code,
  'Spring Boot': Cpu,
  'FastAPI': Zap,
  'Azure OpenAI': Brain,
  'LangChain': Brain,
  'NLP': Brain,
  'Prompt Engineering': Brain,
  'RAG Systems': Brain,
  'Fine-tuning': Brain,
  'Gemini AI': Brain,
  'Docker': Wrench,
  'Git': GitBranch,
  'Linux': Terminal,
  'Figma': Palette,
  'SQL': Database
};

const categoryColors = {
  languages: 'from-blue-400 to-cyan-400',
  frameworks: 'from-purple-400 to-pink-400',
  ai: 'from-pink-400 to-rose-400',
  tools: 'from-green-400 to-teal-400'
};

const categoryLabels = {
  languages: 'Programming Languages & CS Fundamentals',
  frameworks: 'Frameworks & Libraries',
  ai: 'AI & Machine Learning',
  tools: 'Tools & Technologies'
};

export const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Expertise across modern technologies, AI frameworks, and development tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
              const colorGradient = categoryColors[category as keyof typeof categoryColors];
              const categoryLabel = categoryLabels[category as keyof typeof categoryLabels];

              return (
                <motion.div
                  key={category}
                  variants={categoryVariants}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all duration-500"
                >
                  <motion.h3
                    className={`text-xl font-bold mb-8 bg-gradient-to-r ${colorGradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {categoryLabel}
                  </motion.h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {categorySkills.map((skill) => {
                      const IconComponent = skillIcons[skill.name] || Code;

                      return (
                        <motion.div
                          key={skill.name}
                          variants={skillVariants}
                          whileHover={{
                            scale: 1.1,
                            rotateY: 10,
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative bg-slate-700/50 border border-slate-600 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex flex-col items-center text-center space-y-3">
                            <motion.div
                              whileHover={{ rotate: 12, scale: 1.2 }}
                              transition={{ duration: 0.3 }}
                              className={`p-3 rounded-lg bg-gradient-to-r ${colorGradient} group-hover:shadow-lg transition-all duration-300`}
                            >
                              <IconComponent className="text-white" size={24} />
                            </motion.div>

                            <motion.span
                              className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-300"
                              whileHover={{ y: -2 }}
                            >
                              {skill.name}
                            </motion.span>
                          </div>

                          {/* Hover glow effect */}
                          <motion.div
                            className={`absolute inset-0 rounded-lg bg-gradient-to-r ${colorGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                            whileHover={{ scale: 1.05 }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            variants={categoryVariants}
            className="mt-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-3 justify-center max-w-2xl">
                {[
                  'Generative AI Development',
                  'Full-Stack Engineering',
                  'Backend Development',
                  'Machine Learning',
                  'API Design',
                  'Databases',
                  'System Design'
                ].map((competency, index) => (
                  <motion.span
                    key={competency}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 rounded-full text-sm border border-slate-600 hover:border-blue-400/50 hover:text-white transition-all duration-300"
                  >
                    {competency}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Note */}
          <motion.div
            variants={categoryVariants}
            className="mt-8 text-center"
          >
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-slate-400 text-sm italic bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-4 inline-block"
            >
              Had experience working with these technologies through various projects and internships
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};