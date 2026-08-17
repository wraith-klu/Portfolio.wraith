import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Mentorships } from './components/Mentorships';
import { Volunteering } from './components/Volunteering';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen text-slate-900 font-sans relative">
      {/* ── Fixed Global Background ── */}
      <div className="portfolio-bg">
        {/* Pinterest video background */}
        <video
          className="portfolio-bg-video"
          src="/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Light gradient overlay */}
        <div className="portfolio-bg-overlay" />
        {/* Animated color blobs */}
        <div className="blobs-container">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="blob blob-4" />
        </div>
      </div>

      {/* ── Page Content ── */}
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Mentorships />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;