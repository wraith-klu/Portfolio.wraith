import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
// import { Publications } from './components/Publications';
import { Certifications } from './components/Certifications';
import { Mentorships } from './components/Mentorships';
import { Volunteering } from './components/Volunteering';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        {/* <Publications /> */}
        <Certifications />
        <Mentorships />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;