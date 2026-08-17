import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { CompanyLogo } from './CompanyLogo';

export const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const colors = [
    { bg: 'bg-accent-violet/10', text: 'text-accent-violet', border: 'border-accent-violet/20', bar: 'from-accent-violet to-accent-indigo' },
    { bg: 'bg-accent-cyan/10', text: 'text-accent-cyan', border: 'border-accent-cyan/20', bar: 'from-accent-cyan to-blue-500' },
    { bg: 'bg-amber-400/10', text: 'text-amber-600', border: 'border-amber-400/20', bar: 'from-amber-400 to-orange-400' },
    { bg: 'bg-accent-rose/10', text: 'text-accent-rose', border: 'border-accent-rose/20', bar: 'from-accent-rose to-accent-pink' },
  ];

  return (
    <section id="certifications" className="section-wrapper relative">
      <div className="section-blob-cyan top-0 right-0" />
      <div className="section-blob-violet bottom-0 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="section-heading">
              Verified <span className="gradient-text-violet">Certifications</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Continuous learning and professional credentials in cloud, ML, and CS architectures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {certifications.map((cert, index) => {
              const color = colors[index % colors.length];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/60 shadow-glass group relative flex flex-col min-h-[14rem]"
                >
                  {/* Top accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${color.bar}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 ${color.bg} ${color.text} rounded-xl border ${color.border}`}>
                        <ShieldCheck size={18} />
                      </div>
                      <span className="text-slate-400 text-xs font-mono tracking-widest">{cert.year}</span>
                    </div>

                    <h3 className="text-slate-900 font-extrabold text-sm mb-3 group-hover:text-accent-violet transition-colors duration-300 leading-snug flex-1">
                      {cert.title}
                    </h3>

                    {/* Issuer with logo */}
                    <CompanyLogo
                      name={cert.issuer}
                      size={20}
                      nameClassName={`text-xs font-bold ${color.text}`}
                      className="mb-4"
                    />

                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-bold ${color.text} hover:underline pt-3 border-t border-black/5 mt-auto`}
                      >
                        <ExternalLink size={11} />
                        Verify Credentials
                      </a>
                    )}
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