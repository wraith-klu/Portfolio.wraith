import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';
import { TechIcon } from './TechIcon';

const categoryConfig = {
  languages: {
    label: 'Programming & CS Fundamentals',
    gradient: 'from-accent-cyan to-blue-500',
    bg: 'bg-accent-cyan/10',
    border: 'border-accent-cyan/20',
    text: 'text-accent-cyan',
    badgeClass: 'badge-cyan',
  },
  frameworks: {
    label: 'Frameworks & Libraries',
    gradient: 'from-accent-violet to-accent-indigo',
    bg: 'bg-accent-violet/10',
    border: 'border-accent-violet/20',
    text: 'text-accent-violet',
    badgeClass: 'badge-violet',
  },
  ai: {
    label: 'Generative AI & Machine Learning',
    gradient: 'from-accent-rose to-accent-pink',
    bg: 'bg-accent-rose/10',
    border: 'border-accent-rose/20',
    text: 'text-accent-rose',
    badgeClass: 'badge-rose',
  },
  tools: {
    label: 'Tools & DevOps Platforms',
    gradient: 'from-amber-400 to-orange-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    text: 'text-amber-600',
    badgeClass: 'badge-amber',
  },
};

export const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };
  const chipVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } }
  };

  return (
    <section id="skills" className="section-wrapper relative">
      <div className="section-blob-rose top-0 right-0" />
      <div className="section-blob-violet bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="section-heading">
              Technical <span className="gradient-text-violet">Skills</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Expertise across modern technologies, AI frameworks, and dev tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
              const config = categoryConfig[category as keyof typeof categoryConfig];
              if (!config) return null;

              return (
                <motion.div
                  key={category}
                  variants={cardVariants}
                  className="glass-card rounded-3xl p-7 border border-white/60 shadow-glass overflow-hidden relative"
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} rounded-t-3xl`} />

                  <h3 className={`text-sm font-black mb-6 bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                    {config.label}
                  </h3>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {categorySkills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          variants={chipVariants}
                          whileHover={{ y: -3, scale: 1.04 }}
                          className={`group flex flex-col items-center text-center p-3.5 rounded-2xl ${config.bg} border ${config.border} cursor-default transition-all duration-300 hover:shadow-md`}
                        >
                          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/80 shadow-sm mb-2 group-hover:shadow-md transition-all duration-300 border border-white/60">
                            <TechIcon name={skill.name} size={20} />
                          </div>
                          <span className="text-slate-700 font-bold text-[10px] tracking-wide leading-tight group-hover:text-slate-900 transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Core Competencies */}
          <motion.div variants={cardVariants} className="mt-12 text-center">
            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-glass max-w-2xl mx-auto">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-5">
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {[
                  'Generative AI Development', 'Full-Stack Engineering', 'Backend Development',
                  'Machine Learning', 'API Design & Optimisation', 'Databases & Query Tuning', 'System Design'
                ].map((competency) => (
                  <span
                    key={competency}
                    className="badge badge-violet cursor-default hover:bg-accent-violet/20 transition-colors"
                  >
                    {competency}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};