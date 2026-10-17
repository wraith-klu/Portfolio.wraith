import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Subtle top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />

      <div className="glass-card border-t border-white/40" style={{ background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(24px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-black/5">

            {/* Brand */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center shadow-violet-glow">
                  <span className="text-white font-black text-sm">SY</span>
                </div>
                <span className="text-lg font-black gradient-text-violet">Wraith.AI</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                AI / ML Engineer & Backend Developer. Designing intelligent language architectures and high-performance API services.
              </p>
              {/* Live status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200/70 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">
                  All systems operational
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2.5">
                {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const el = document.querySelector(`#${link.toLowerCase()}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-sm font-semibold text-slate-500 hover:text-accent-violet transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect + Back to top */}
            <div className="md:col-span-4 flex flex-col md:items-end gap-4">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest md:self-end">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={s.label}
                    className="p-3 glass-card border border-white/60 shadow-glass text-slate-500 hover:text-accent-violet hover:border-accent-violet/30 rounded-xl transition-all duration-300"
                  >
                    <s.icon size={18} />
                  </motion.a>
                ))}
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-4 py-2 glass-card border border-white/60 shadow-sm text-slate-500 hover:text-accent-violet hover:border-accent-violet/30 rounded-full text-xs font-bold transition-all duration-300"
              >
                Back to Top
                <ArrowUp size={12} />
              </motion.button>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-semibold text-slate-400">
            <p>© {new Date().getFullYear()} Saurabh Yadav. All rights reserved.</p>
            <p className="font-mono text-[10px] tracking-widest text-slate-300 uppercase">
              Designed & Built by Wraith
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};