import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = window.scrollY;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(winHeightPx > 0 ? scrollPx / winHeightPx : 0);
      setIsScrolled(scrollPx > 30);

      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = scrollPx + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + scrollPx;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
        style={{
          scaleX: scrollProgress,
          background: 'linear-gradient(90deg, #7C3AED, #06B6D4, #F43F5E)'
        }}
      />

      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-5xl mx-auto rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'glass-nav py-3 px-6 shadow-xl'
              : 'bg-transparent py-4 px-6'
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('#hero')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center shadow-violet-glow">
                <span className="text-white font-black text-xs">Wraith</span>
              </div>
              <span className="text-base font-black tracking-tight gradient-text-violet">
                @wraaiiitthhh
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-accent-violet'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-accent-violet/10 rounded-xl border border-accent-violet/25"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Hire Me CTA */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(124,58,237,0.45)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#contact')}
                className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-accent-violet to-accent-indigo shadow-[0_4px_15px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_25px_rgba(124,58,237,0.5)] transition-all duration-300"
              >
                Hire Me
                <ArrowRight size={14} />
              </motion.button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-white/60 border border-white/70 backdrop-blur-sm shadow-sm"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-20 left-4 right-4 rounded-2xl glass-card border border-white/60 shadow-2xl p-5"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-accent-violet/10 text-accent-violet border border-accent-violet/20'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-accent-violet to-accent-indigo text-white font-bold text-sm"
                >
                  Hire Me →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};