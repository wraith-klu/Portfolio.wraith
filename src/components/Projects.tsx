import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolio';

const categories = ['All', 'AI / ML', 'Full-Stack', 'Hackathons'];

const categoryAccents: Record<string, string> = {
  'All': 'from-accent-violet to-accent-indigo',
  'AI / ML': 'from-accent-cyan to-blue-500',
  'Full-Stack': 'from-accent-rose to-accent-pink',
  'Hackathons': 'from-amber-400 to-orange-400',
};

export const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('All');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'AI / ML') {
      return project.techStack.some(tech =>
        ['AI', 'ML', 'NLP', 'LLM', 'Machine Learning', 'Sentiment Analysis', 'AST', 'Gemini', 'Ensemble ML', 'faster-whisper', 'NLLB-200', 'Piper TTS', 'scikit-learn'].includes(tech)
      );
    }
    if (activeCategory === 'Full-Stack') {
      return project.techStack.some(tech =>
        ['React.js', 'Spring Boot', 'MySQL', 'Docker', 'REST APIs', 'JWT', 'React (Vite)', 'React', 'FastAPI', 'WebSocket', 'PostgreSQL', 'Three.js'].includes(tech)
      );
    }
    if (activeCategory === 'Hackathons') {
      return project.description.toLowerCase().includes('hackathon') ||
        project.title.toLowerCase().includes('hackathon');
    }
    return true;
  });

  return (
    <section id="projects" className="section-wrapper relative">
      <div className="section-blob-violet -top-20 right-1/4" />
      <div className="section-blob-cyan bottom-0 left-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={cardVariants} className="text-center mb-12">
            <h2 className="section-heading">
              Featured <span className="gradient-text-violet">Projects</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Innovative solutions spanning AI automation, NLP moderation, and robust web applications
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={cardVariants} className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                    isActive
                      ? `bg-gradient-to-r ${categoryAccents[cat]} text-white border-transparent shadow-md`
                      : 'glass-card text-slate-600 border-white/60 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/60 shadow-glass group flex flex-col"
                >
                  {/* Top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r ${categoryAccents['All']}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {project.logo ? (
                            <div className="p-1 bg-white rounded-xl border border-white/80 shadow-sm flex items-center justify-center overflow-hidden" style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                              <img src={project.logo} alt={project.title} className="object-contain w-full h-full" />
                            </div>
                          ) : (
                            <div className="p-2 bg-accent-violet/10 rounded-xl border border-accent-violet/20">
                              <Sparkles size={15} className="text-accent-violet" />
                            </div>
                          )}
                          {project.featured && (
                            <span className="badge badge-amber text-[10px]">Featured</span>
                          )}
                          {project.timing && (
                            <span className="badge badge-cyan text-[10px]">{project.timing}</span>
                          )}
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 leading-tight group-hover:text-accent-violet transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex gap-2 ml-3">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.12 }}
                            title="View on GitHub"
                            className="p-2 rounded-xl glass-card border border-white/60 text-slate-500 hover:text-accent-violet hover:border-accent-violet/30 transition-all duration-300"
                          >
                            <Github size={15} />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.12 }}
                            title="View Live Demo"
                            className="p-2 rounded-xl glass-card border border-white/60 text-slate-500 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
                          >
                            <ExternalLink size={15} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Architecture Pill */}
                    {project.architecture && (
                      <div className="mb-3 p-2 rounded-xl bg-slate-900/[0.03] border border-black/5 text-[11px] font-mono text-slate-700">
                        <span className="font-bold text-accent-violet">Arch: </span>
                        {project.architecture}
                      </div>
                    )}

                    {/* Key Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {project.metrics.map((m, mi) => (
                          <div key={mi} className="glass-card rounded-lg p-2 text-center border border-white/80 bg-white/50">
                            <div className="text-xs font-black text-slate-900 leading-tight">{m.value}</div>
                            <div className="text-[9px] font-semibold text-slate-500 uppercase mt-0.5 tracking-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlights bullet points */}
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mb-4 space-y-1 text-[11px] text-slate-600">
                        {project.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-start gap-1.5">
                            <span className="text-accent-cyan font-bold mt-0.5">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-black/5">
                      {project.techStack.slice(0, 6).map((tech, i) => (
                        <span key={i} className="badge badge-violet text-[10px] cursor-default">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="badge badge-cyan text-[10px]">+{project.techStack.length - 6}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-slate-500"
            >
              No projects in this category yet.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};