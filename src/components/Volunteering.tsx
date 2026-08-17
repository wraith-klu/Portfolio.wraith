import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Calendar, TrendingUp } from 'lucide-react';
import { volunteering } from '../data/portfolio';

export const Volunteering = () => {
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
    <section id="volunteering" className="section-wrapper relative">
      <div className="section-blob-rose top-0 right-0" />
      <div className="section-blob-cyan bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="section-heading">
              Volunteering & <span className="gradient-text-violet">Leadership</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Contributing to community growth through technical mentorship, club roles, and event organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {volunteering.map((volunteer, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/60 shadow-glass group relative"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-accent-rose to-accent-pink" />

                <div className="p-7 flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-accent-rose to-accent-pink text-white rounded-2xl shadow-md">
                      <Heart size={20} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-accent-rose transition-colors duration-300">
                      {volunteer.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-accent-violet">
                        <Users size={12} />
                        <span>{volunteer.organization}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                        <Calendar size={12} />
                        <span>{volunteer.duration}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {volunteer.description}
                    </p>

                    {volunteer.impact && (
                      <div className="bg-emerald-50 border border-emerald-200/60 rounded-2xl p-4">
                        <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                          <TrendingUp size={12} />
                          <span>Impact Made</span>
                        </div>
                        <p className="text-xs text-emerald-700 leading-relaxed">
                          {volunteer.impact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={cardVariants} className="mt-12 max-w-3xl mx-auto">
            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-glass text-center">
              <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                Passionate About Technical Community Growth
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                I believe in driving mutual progress by helping peers, conducting workshop sessions,
                and building tools that improve student learning experiences.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
