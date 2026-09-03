import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import RecruiterMode from './components/RecruiterMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import EngineeringApproach from './components/EngineeringApproach';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [recruiterModeOpen, setRecruiterModeOpen] = useState(false);

  // Initialize IntersectionObserver scroll reveal
  useScrollReveal();

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col relative">
      <ScrollProgress />
      
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenRecruiterMode={() => setRecruiterModeOpen(true)}
      />

      <RecruiterMode
        isOpen={recruiterModeOpen}
        onClose={() => setRecruiterModeOpen(false)}
      />

      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenRecruiterMode={() => setRecruiterModeOpen(true)}
      />

      <main className="flex-grow">
        <Hero onOpenRecruiterMode={() => setRecruiterModeOpen(true)} />
        <About />
        <Experience />
        <EngineeringApproach />
        <Projects />
        <Skills />
        <Journey />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
