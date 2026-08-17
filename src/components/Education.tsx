import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, CheckCircle2, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { CompanyLogo } from './CompanyLogo';

export const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const highlights = [
    'Maintaining academic excellence with 9.61/10 cumulative GPA',
    'Specializing in AI-Driven Language Technology & Generative AI architectures',
    'Created high-performance API structures and static code analysers',
    'Completed virtual training projects via industry-partnered programs'
  ];

  return (
    <section id="education" className="section-wrapper relative">
      <div className="section-blob-cyan top-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading">
              Academic <span className="gradient-text-violet">Journey</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Pursuing excellence in Computer Science & Engineering
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-7 top-0 bottom-0 w-0.5 timeline-line rounded-full" />

              <div className="relative pl-20 pb-8">
                {/* Timeline dot */}
                <div className="absolute left-5 top-7 timeline-dot z-10" />

                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-3xl p-8 border border-white/60 shadow-glass relative overflow-hidden"
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-rose rounded-t-3xl" />

                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <CompanyLogo name="Koneru Lakshmaiah University" size={48} showName={false}
                        className="p-1.5 bg-white rounded-2xl border border-white/80 shadow-sm" />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                          Bachelor of Technology
                        </h3>
                        <p className="text-accent-violet font-bold text-sm tracking-wide">
                          Computer Science & Engineering
                        </p>
                        <CompanyLogo
                          name="Koneru Lakshmaiah University"
                          size={16}
                          nameClassName="text-xs text-slate-500 font-semibold"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="md:ml-auto px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-xl font-black text-sm flex items-center gap-1.5 shadow-md self-start">
                      <Award size={15} />
                      CGPA: {personalInfo.cgpa}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <MapPin size={16} className="text-accent-violet flex-shrink-0" />
                      <span className="font-semibold">{personalInfo.university}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <Calendar size={16} className="text-accent-cyan flex-shrink-0" />
                      <span className="font-semibold">{personalInfo.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-5 border-t border-black/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">
                      Key Highlights
                    </h4>
                    {highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3 text-slate-700 text-sm"
                      >
                        <CheckCircle2 size={15} className="text-accent-violet mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};