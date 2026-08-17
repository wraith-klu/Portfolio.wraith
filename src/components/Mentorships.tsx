import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award } from 'lucide-react';
import { mentorships } from '../data/portfolio';
import { CompanyLogo } from './CompanyLogo';

export const Mentorships = () => {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <section id="mentorships" className="section-wrapper relative">
      <div className="section-blob-violet top-0 left-0" />
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
              Mentorship <span className="gradient-text-violet">Programs</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Continuous professional growth through structured mentorship programs and tech incubators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {mentorships.map((mentorship, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/60 shadow-glass group relative"
              >
                {/* Top accent bar */}
                <div className={`h-1 bg-gradient-to-r ${
                  mentorship.role === 'mentee' ? 'from-accent-violet to-accent-cyan' : 'from-accent-rose to-accent-pink'
                }`} />

                <div className="p-7 flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-2xl shadow-md text-white bg-gradient-to-br ${
                      mentorship.role === 'mentee' ? 'from-accent-violet to-accent-indigo' : 'from-accent-rose to-accent-pink'
                    }`}>
                      {mentorship.role === 'mentee' ? <Users size={20} /> : <Award size={20} />}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-accent-violet transition-colors duration-300">
                      {mentorship.program}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <CompanyLogo
                        name={mentorship.organization}
                        size={20}
                        nameClassName="text-xs font-bold text-accent-violet"
                      />
                      <span className="text-slate-400 text-xs font-semibold">{mentorship.duration}</span>
                      <span className={`badge text-[10px] ${
                        mentorship.role === 'mentee' ? 'badge-cyan' : 'badge-rose'
                      }`}>
                        {mentorship.role.charAt(0).toUpperCase() + mentorship.role.slice(1)}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {mentorship.description}
                    </p>

                    {mentorship.selectionProcess && (
                      <div className="bg-accent-violet/5 border border-accent-violet/15 rounded-2xl p-4">
                        <p className="text-[10px] font-black text-accent-violet uppercase tracking-widest mb-1.5">
                          Selection Process
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {mentorship.selectionProcess}
                        </p>
                      </div>
                    )}
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
