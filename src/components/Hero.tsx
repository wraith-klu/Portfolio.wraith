import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ChevronDown} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

type TimeoutId = ReturnType<typeof setTimeout>;

export const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(mouseX, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const currentTagline = personalInfo.taglines[currentTaglineIndex];
    let index = 0;
    let typingTimeout: TimeoutId;
    
    const typeWriter = () => {
      if (index <= currentTagline.length) {
        setDisplayedText(currentTagline.slice(0, index));
        index++;
        typingTimeout = setTimeout(typeWriter, 100);
      } else {
        // Wait before starting to delete
        typingTimeout = setTimeout(() => {
          // Start deleting
          const deleteText = () => {
            if (index > 0) {
              setDisplayedText(currentTagline.slice(0, index - 1));
              index--;
              typingTimeout = setTimeout(deleteText, 50);
            } else {
              // Move to next tagline
              setTimeout(() => {
                setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
              }, 500);
            }
          };
          deleteText();
        }, 2000);
      }
    };

    typeWriter();

    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [currentTaglineIndex]);

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateXValue = (e.clientY - centerY) / rect.height * -20;
        const rotateYValue = (e.clientX - centerX) / rect.width * 20;
        
        mouseX.set(rotateYValue);
        mouseY.set(rotateXValue);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* 3D Tech Grid Background */}
      <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
        {/* 3D Grid Network */}
        <motion.div
          className="absolute inset-0"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Grid Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" style={{ transform: 'translateZ(-100px)' }}>
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Vertical Lines */}
            {Array.from({ length: 12 }, (_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={`${(i * 100) / 11}%`}
                y1="0%"
                x2={`${(i * 100) / 11}%`}
                y2="100%"
                stroke="url(#gridGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 3
                }}
              />
            ))}
            
            {/* Horizontal Lines */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0%"
                y1={`${(i * 100) / 7}%`}
                x2="100%"
                y2={`${(i * 100) / 7}%`}
                stroke="url(#gridGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 3
                }}
              />
            ))}
          </svg>

          {/* Floating 3D Geometric Shapes */}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={`cube-${i}`}
              className="absolute"
              style={{
                left: `${(i * 7) % 90 + 5}%`,
                top: `${(i * 11) % 80 + 10}%`,
                transform: `translateZ(${(i % 3) * 50 - 50}px)`
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10 + (i % 5) * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5
              }}
            >
              <div 
                className={`w-6 h-6 border-2 ${
                  i % 4 === 0 ? 'border-blue-400/40 bg-blue-400/10' :
                  i % 4 === 1 ? 'border-purple-400/40 bg-purple-400/10' :
                  i % 4 === 2 ? 'border-cyan-400/40 bg-cyan-400/10' :
                  'border-pink-400/40 bg-pink-400/10'
                } backdrop-blur-sm`}
                style={{
                  transform: 'rotateX(45deg) rotateY(45deg)',
                  borderRadius: i % 2 === 0 ? '0' : '50%'
                }}
              />
            </motion.div>
          ))}

          {/* Cute 3D Tech Models */}
          {/* Floating Laptop */}
          <motion.div
            className="absolute"
            style={{
              left: '15%',
              top: '20%',
              transform: `translateZ(100px)`
            }}
            animate={{
              rotateY: [0, 15, -15, 0],
              y: [0, -10, 0],
              rotateX: rotateX.get() * 0.3,
              rotateZ: rotateY.get() * 0.2
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="relative w-16 h-12 transform-gpu">
              {/* Laptop Base */}
              <div className="absolute bottom-0 w-16 h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-sm shadow-lg transform rotateX-10">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-slate-600 rounded-sm opacity-80" />
              </div>
              {/* Laptop Screen */}
              <div className="absolute bottom-2 w-14 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-sm border border-slate-600 ml-1 transform origin-bottom rotateX-75">
                <div className="m-1 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-sm border border-blue-400/30">
                  <div className="p-1 text-xs text-blue-300/60 font-mono leading-none">
                    <div className="w-8 h-1 bg-blue-400/40 rounded mb-0.5" />
                    <div className="w-6 h-1 bg-green-400/40 rounded mb-0.5" />
                    <div className="w-7 h-1 bg-purple-400/40 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cute Robot */}
          <motion.div
            className="absolute"
            style={{
              right: '20%',
              top: '30%',
              transform: `translateZ(80px)`
            }}
            animate={{
              rotate: [0, 5, -5, 0],
              y: [0, -15, 0],
              rotateY: rotateY.get() * 0.4,
              rotateX: rotateX.get() * 0.2
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="relative w-12 h-16 transform-gpu">
              {/* Robot Head */}
              <div className="absolute top-0 w-10 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mx-1 border border-cyan-300/50">
                {/* Eyes */}
                <div className="flex justify-around items-center h-full">
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                  />
                </div>
              </div>
              {/* Robot Body */}
              <div className="absolute top-8 w-12 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded border border-slate-500">
                <div className="absolute top-1 left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute top-3 left-2 right-2 h-1 bg-blue-400/50 rounded" />
                <div className="absolute top-5 left-2 right-2 h-1 bg-purple-400/50 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Floating Phone */}
          <motion.div
            className="absolute"
            style={{
              left: '70%',
              top: '60%',
              transform: `translateZ(60px)`
            }}
            animate={{
              rotateY: [0, 20, -20, 0],
              rotateZ: [0, 10, -10, 0],
              y: [0, -8, 0],
              rotateX: rotateX.get() * 0.5,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="relative w-8 h-14 transform-gpu">
              <div className="w-8 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-600 shadow-lg">
                <div className="m-0.5 h-13 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-md border border-blue-400/20">
                  <div className="p-1">
                    <div className="w-6 h-1 bg-blue-400/60 rounded mb-1" />
                    <div className="w-5 h-1 bg-green-400/60 rounded mb-1" />
                    <div className="w-4 h-1 bg-purple-400/60 rounded mb-1" />
                    <div className="w-6 h-1 bg-pink-400/60 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Cloud */}
          <motion.div
            className="absolute"
            style={{
              left: '25%',
              top: '70%',
              transform: `translateZ(40px)`
            }}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -12, 0],
              scale: [1, 1.1, 1],
              rotateY: rotateY.get() * 0.3,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="relative w-14 h-8 transform-gpu">
              <div className="w-14 h-6 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full backdrop-blur-sm border border-blue-400/30">
                <div className="absolute top-1 left-2 w-3 h-3 bg-white/20 rounded-full" />
                <div className="absolute top-0 left-4 w-4 h-4 bg-white/15 rounded-full" />
                <div className="absolute top-1 right-2 w-2 h-2 bg-white/25 rounded-full" />
              </div>
              {/* Cloud data streams */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-6 w-px h-4 bg-gradient-to-b from-blue-400/60 to-transparent"
                  style={{ left: `${20 + i * 15}%` }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scaleY: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Database */}
          <motion.div
            className="absolute"
            style={{
              right: '15%',
              top: '70%',
              transform: `translateZ(90px)`
            }}
            animate={{
              rotateY: [0, 360],
              y: [0, -10, 0],
              rotateX: rotateX.get() * 0.2,
            }}
            transition={{
              rotateY: { duration: 12, repeat: Infinity, ease: 'linear' },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <div className="relative w-10 h-12 transform-gpu">
              {/* Database cylinders */}
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative mb-1">
                  <div className={`w-10 h-3 rounded-full border ${
                    i === 0 ? 'bg-green-400/20 border-green-400/40' :
                    i === 1 ? 'bg-blue-400/20 border-blue-400/40' :
                    'bg-purple-400/20 border-purple-400/40'
                  }`}>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/10"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Rocket */}
          <motion.div
            className="absolute"
            style={{
              left: '80%',
              top: '15%',
              transform: `translateZ(120px)`
            }}
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -20, 0],
              x: [0, 10, -10, 0],
              rotateY: rotateY.get() * 0.6,
              rotateX: rotateX.get() * 0.4,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="relative w-8 h-16 transform-gpu">
              {/* Rocket Body */}
              <div className="absolute bottom-4 w-6 h-10 bg-gradient-to-t from-slate-600 to-slate-400 rounded-t-full mx-1 border border-slate-500">
                <div className="absolute top-2 left-1 right-1 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded border border-blue-400/50" />
              </div>
              {/* Rocket Tip */}
              <div className="absolute top-0 w-4 h-6 bg-gradient-to-t from-red-500 to-orange-400 rounded-t-full mx-2 border border-red-400" />
              {/* Rocket Flames */}
              <motion.div
                className="absolute bottom-0 left-2 w-4 h-6"
                animate={{
                  scaleY: [0.8, 1.2, 0.8],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="w-2 h-6 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-b-full" />
                <div className="absolute left-1 w-2 h-4 bg-gradient-to-t from-red-500 to-orange-400 rounded-b-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Gear */}
          <motion.div
            className="absolute"
            style={{
              left: '10%',
              top: '60%',
              transform: `translateZ(70px)`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              rotateY: rotateY.get() * 0.4,
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <div className="relative w-12 h-12 transform-gpu">
              <div className="w-12 h-12 border-4 border-slate-500 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg">
                {/* Gear teeth */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-1 bg-slate-500 rounded"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-6px)`
                    }}
                  />
                ))}
                {/* Gear center */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 border border-blue-400/50" />
              </div>
            </div>
          </motion.div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            {Array.from({ length: 5 }, (_, i) => (
              <motion.path
                key={`connection-${i}`}
                d={`M ${20 + i * 160} 100 Q ${100 + i * 160} 200 ${180 + i * 160} 300 T ${300 + i * 160} 500`}
                stroke="url(#gridGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 2
                }}
              />
            ))}
          </svg>

          {/* Pulse Rings */}
          {Array.from({ length: 3 }, (_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) translateZ(${i * 20}px)`
              }}
            >
              <motion.div
                className="w-96 h-96 border border-blue-400/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.1, 0.5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              {personalInfo.name.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-16 mb-6"
            >
              <p className="text-xl sm:text-2xl text-slate-300 mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold min-h-[1em] inline-block">
                  {displayedText || '\u00A0'}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-blue-400"
                >
                  |
                </motion.span>
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg text-slate-400 mb-8 max-w-xl"
            >
              {personalInfo.title} at {personalInfo.university} • CGPA: {personalInfo.cgpa}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="https://drive.google.com/file/d/1o5JHehdVAv0aZf5gu_01ER9_keCVZhwz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold flex items-center gap-2 justify-center transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold flex items-center gap-2 justify-center transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
                { icon: Mail, href: `mailto:${personalInfo.email}` }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-slate-700"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
            
            {/* Product Designer Portfolio */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex items-center gap-3 justify-center lg:justify-start mt-4"
            >
              <p className="text-slate-300 text-sm">Product Designer Portfolio</p>
              <motion.a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-slate-700"
              >
                <ExternalLink size={24} />
              </motion.a>
            </motion.div> */}
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 blur-xl opacity-30"
                style={{ padding: '4px' }}
              />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Wraaiiitthhh"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};