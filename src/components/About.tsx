import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Brain, Cpu, Target, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const stats = [
    { label: 'Cumulative GPA', value: '9.61', sub: '/ 10', icon: GraduationCap, color: 'text-accent-violet', bg: 'bg-accent-violet/10', border: 'border-accent-violet/20' },
    { label: 'DSA Solved', value: '500+', sub: 'Problems', icon: Brain, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20' },
    { label: 'CSE Department', value: 'Top 1%', sub: 'Rank', icon: Award, color: 'text-accent-rose', bg: 'bg-accent-rose/10', border: 'border-accent-rose/20' },
    { label: 'AI/ML Projects', value: '5+', sub: 'Core Systems', icon: Cpu, color: 'text-amber-500', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
  ];

  return (
    <section id="about" className="section-wrapper relative">
      <div className="section-blob-violet -top-20 -left-20" />
      <div className="section-blob-rose bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text-violet">Me</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Driven by curiosity. Powered by code.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Bio */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                variants={itemVariants}
                className="glass-card rounded-3xl p-8 border border-white/60 shadow-glass"
              >
                <p className="text-slate-700 text-base leading-relaxed">
                  {personalInfo.bio}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Target,
                    title: 'Engineering Goals',
                    desc: 'Building language-centric intelligent systems that convert complex inputs into precise, structured API intelligence at scale.',
                    color: 'text-accent-violet',
                    bg: 'bg-accent-violet/8'
                  },
                  {
                    icon: BookOpen,
                    title: 'Academic Dedication',
                    desc: 'Pursuing continuous learning in advanced NLP, data structures, cloud-native deployments, and LLM orchestration.',
                    color: 'text-accent-cyan',
                    bg: 'bg-accent-cyan/8'
                  }
                ].map((v, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="glass-card rounded-2xl p-6 border border-white/60 shadow-glass group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2.5 rounded-xl ${v.bg} border border-white/50`}>
                        <v.icon className={v.color} size={18} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{v.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`glass-card rounded-3xl p-6 border ${stat.border} shadow-glass flex flex-col justify-between h-44 relative overflow-hidden group cursor-default`}
                >
                  <div className={`absolute -right-8 -bottom-8 w-24 h-24 ${stat.bg} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} border border-white/50`}>
                      <stat.icon size={20} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest">METRIC_0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 leading-none mb-0.5">{stat.value}</h3>
                    <p className="text-xs text-slate-500 font-semibold">{stat.sub}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};