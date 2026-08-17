import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { CompanyLogo } from './CompanyLogo';

export const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const accentColors = [
    'from-accent-violet to-accent-indigo',
    'from-accent-cyan to-blue-500',
    'from-accent-rose to-accent-pink',
  ];

  return (
    <section id="experience" className="section-wrapper relative">
      <div className="section-blob-violet bottom-0 left-0" />
      <div className="section-blob-cyan top-1/4 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="section-heading">
              Professional <span className="gradient-text-violet">Experience</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Building innovative solutions through internships and real-world projects
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-8 border border-white/60 shadow-glass relative overflow-hidden group"
              >
                {/* Colored accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColors[index % accentColors.length]} rounded-t-3xl`} />
                {/* Left accent bar on hover */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${accentColors[index % accentColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl`} />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-black/5">
                  <div className="flex items-center gap-4">
                    <CompanyLogo name={exp.company} size={40} showName={false}
                      className="p-1.5 bg-white rounded-2xl border border-white/80 shadow-sm" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-accent-violet transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <CompanyLogo
                        name={exp.company}
                        size={18}
                        nameClassName="text-accent-violet font-bold text-sm tracking-wide"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white/60 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/60 shadow-sm self-start sm:self-auto">
                    <Calendar size={13} className="text-accent-rose" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.08 }}
                      className="flex items-start gap-3 text-slate-700 text-sm"
                    >
                      <CheckCircle2 size={15} className="text-accent-violet mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-black/5">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="badge badge-violet text-xs hover:bg-accent-violet/20 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.verifyUrl && (
                  <div className="mt-4 pt-3 border-t border-black/5">
                    <a
                      href={exp.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-violet hover:text-accent-indigo transition-colors duration-200 group/verify"
                    >
                      <ExternalLink size={12} className="group-hover/verify:translate-x-0.5 group-hover/verify:-translate-y-0.5 transition-transform duration-200" />
                      Verify Certificate
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};