import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ChevronDown, MapPin, Sparkles, Code2, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

type TimeoutId = ReturnType<typeof setTimeout>;

export const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentTagline = personalInfo.taglines[currentTaglineIndex];
    let index = 0;
    let typingTimeout: TimeoutId;
    setIsTyping(true);

    const typeWriter = () => {
      if (index <= currentTagline.length) {
        setDisplayedText(currentTagline.slice(0, index));
        index++;
        typingTimeout = setTimeout(typeWriter, 80);
      } else {
        setIsTyping(false);
        typingTimeout = setTimeout(() => {
          setIsTyping(true);
          const deleteText = () => {
            if (index > 0) {
              setDisplayedText(currentTagline.slice(0, index - 1));
              index--;
              typingTimeout = setTimeout(deleteText, 40);
            } else {
              setTimeout(() => {
                setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
              }, 300);
            }
          };
          deleteText();
        }, 2200);
      }
    };

    typeWriter();
    return () => { if (typingTimeout) clearTimeout(typingTimeout); };
  }, [currentTaglineIndex]);

  const scrollToNext = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const floatVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 0, -8],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const stats = [
    { label: 'GPA', value: '9.61', suffix: '/10', icon: '🎓' },
    { label: 'DSA Solved', value: '500', suffix: '+', icon: '⚡' },
    { label: 'Projects', value: '5', suffix: '+', icon: '🚀' },
    { label: 'CSE Rank', value: 'Top 1', suffix: '%', icon: '🏆' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: '5rem' }}
    >
      {/* Section-level extra blobs for hero depth */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)', filter: 'blur(40px)' }} />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)', filter: 'blur(40px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:pr-8"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-green-200/80 text-sm font-semibold text-green-700 shadow-sm">
                <span className="status-dot" />
                Available for AI/ML Engineer & High-Impact Software Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-slate-500 font-semibold text-lg tracking-wide flex items-center gap-2">
                <MapPin size={16} className="text-accent-violet" />
                Andhra Pradesh, India
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-slate-900">Saurabh</span>
                <br />
                <span className="gradient-text-violet">Yadav</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 min-h-[2.5rem]">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-accent-violet to-accent-cyan" />
              <p className="text-xl sm:text-2xl font-bold text-slate-700">
                {displayedText}
                <motion.span
                  animate={{ opacity: isTyping ? [1, 0] : 1 }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 ml-0.5 bg-accent-violet align-middle"
                />
              </p>
            </motion.div>

            {/* Bio short */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-base leading-relaxed max-w-lg"
            >
              Architecting sub-second distributed AI systems, real-time speech translation IoT engines, and high-throughput LLM pipelines. Top 1% CSE Department rank with a <strong className="text-slate-900">9.61 GPA</strong> and 500+ algorithmic solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary hover-shine"
              >
                <Mail size={16} />
                Get In Touch
              </motion.a>
              <motion.a
                href="/Wraithh.pdf"
                target="_blank"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glass"
              >
                <Download size={16} />
                Resume
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glass"
              >
                <Github size={16} />
                GitHub
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glass"
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>
            </motion.div>

            {/* Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['Low-Latency Inference', 'LLM Fallbacks & Reasoning', 'ESP32 IoT + WebSocket', 'Ensemble ML', 'Distributed Systems', 'MLOps'].map(tag => (
                <span key={tag} className="badge badge-violet text-xs font-semibold">{tag}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile Card ── */}
          <motion.div
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-6"
          >
            {/* Profile image + glow ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7C3AED, #06B6D4, #F43F5E, #7C3AED)',
                  padding: '4px',
                  borderRadius: '50%',
                  animation: 'spin 8s linear infinite'
                }} />
              {/* Mid ring */}
              <div className="absolute inset-[4px] rounded-full bg-white/50 backdrop-blur-sm" />
              {/* Profile image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                style={{ zIndex: 1 }}>
                <img
                  src="/profile.jpg"
                  alt="Saurabh Yadav"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/profile.png';
                  }}
                />
              </div>
              {/* Floating icon badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl glass-card border border-white/70 shadow-lg flex items-center justify-center"
              >
                <Brain size={22} className="text-accent-violet" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 w-12 h-12 rounded-2xl glass-card border border-white/70 shadow-lg flex items-center justify-center"
              >
                <Code2 size={22} className="text-accent-cyan" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-6 w-10 h-10 rounded-2xl glass-card border border-white/70 shadow-lg flex items-center justify-center"
              >
                <Sparkles size={18} className="text-accent-rose" />
              </motion.div>
            </motion.div>

            {/* Stats cards row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="glass-card rounded-2xl p-4 text-center cursor-default shadow-glass border border-white/60 group"
                >
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-black text-slate-900 leading-none">
                    {stat.value}
                    <span className="text-base font-bold text-accent-violet">{stat.suffix}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* University badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="glass-card rounded-2xl px-5 py-3 border border-white/60 shadow-glass w-full max-w-xs sm:max-w-sm text-center"
            >
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-0.5">Currently at</p>
              <p className="text-sm font-bold text-slate-800">KL University, Andhra Pradesh</p>
              <p className="text-xs text-accent-violet font-semibold">B.Tech CSE · 2024–2027</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-accent-violet transition-colors duration-300"
        >
          <span className="text-xs font-semibold tracking-wider">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};