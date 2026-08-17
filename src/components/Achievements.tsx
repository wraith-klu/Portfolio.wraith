import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { achievements } from '../data/portfolio';
import { CompanyLogo } from './CompanyLogo';

const icons = [Trophy, Award, Star, Medal];
const gradients = [
  'from-amber-400 to-orange-500',
  'from-accent-cyan to-blue-500',
  'from-accent-rose to-accent-pink',
  'from-accent-violet to-accent-indigo',
];
const topBars = [
  'from-amber-400 to-orange-500',
  'from-accent-cyan to-blue-500',
  'from-accent-rose to-accent-pink',
  'from-accent-violet to-accent-indigo',
];

export const Achievements = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <section id="achievements" className="section-wrapper relative">
      <div className="section-blob-rose top-0 left-0" />
      <div className="section-blob-cyan bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="section-heading">
              Honours & <span className="gradient-text-violet">Achievements</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Recognition for academic excellence, hackathon performance, and competitive coding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = icons[index % icons.length];
              const gradient = gradients[index % gradients.length];
              const topBar = topBars[index % topBars.length];

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/60 shadow-glass group relative flex flex-col"
                >
                  {/* Top accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${topBar}`} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-5 shadow-md self-start`}>
                      <IconComponent size={20} />
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-accent-violet transition-colors duration-300">
                      {achievement.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <CompanyLogo
                        name={achievement.organization}
                        size={18}
                        nameClassName="text-xs font-bold text-accent-violet"
                      />
                      <span className="text-slate-400 text-xs font-semibold">{achievement.year}</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed flex-1">
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