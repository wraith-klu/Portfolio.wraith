/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        glass: {
          white: 'rgba(255, 255, 255, 0.15)',
          dark: 'rgba(15, 23, 42, 0.65)',
          light: 'rgba(248, 250, 252, 0.80)',
          border: 'rgba(255, 255, 255, 0.25)',
          'border-dark': 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          violet: '#7C3AED',
          cyan: '#06B6D4',
          rose: '#F43F5E',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          pink: '#ec4899',
          amber: '#F59E0B',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          900: '#0F172A',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'blob-1': 'blob1 18s ease-in-out infinite',
        'blob-2': 'blob2 22s ease-in-out infinite',
        'blob-3': 'blob3 26s ease-in-out infinite',
        'blob-4': 'blob4 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(80px, -60px) scale(1.15)' },
          '50%': { transform: 'translate(-40px, 80px) scale(0.95)' },
          '75%': { transform: 'translate(60px, 40px) scale(1.05)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '20%': { transform: 'translate(-80px, 60px) scale(1.1)' },
          '40%': { transform: 'translate(60px, -80px) scale(0.9)' },
          '60%': { transform: 'translate(-50px, -40px) scale(1.08)' },
          '80%': { transform: 'translate(70px, 50px) scale(0.95)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(60px, 80px) scale(1.12)' },
          '66%': { transform: 'translate(-70px, -40px) scale(0.92)' },
        },
        blob4: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '30%': { transform: 'translate(-50px, -70px) scale(1.08)' },
          '70%': { transform: 'translate(80px, 30px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.15) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,0.3)',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'violet-glow': '0 0 30px rgba(124, 58, 237, 0.4)',
        'cyan-glow': '0 0 30px rgba(6, 182, 212, 0.4)',
        'rose-glow': '0 0 30px rgba(244, 63, 94, 0.4)',
      }
    },
  },
  plugins: [],
};
