import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCommandPalette, onOpenRecruiterMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver Active Section Detection
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'how-i-build', 'projects', 'skills', 'journey', 'education', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-80px 0px -40% 0px',
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'How I Build', href: '#how-i-build', id: 'how-i-build' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-sm'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-heading text-lg sm:text-xl font-bold tracking-tight text-neutral-900 focus:outline-none touch-target py-1"
        >
          <span className="bg-neutral-900 text-white w-8 h-8 rounded flex items-center justify-center text-sm font-semibold transition-transform group-hover:scale-105">
            AK
          </span>
          <span className="tracking-widest font-mono text-xs uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-6 text-xs font-medium text-neutral-600"
          aria-label="Desktop navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-2 relative ${
                  isActive
                    ? 'text-neutral-900 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-neutral-900'
                    : 'hover:text-neutral-900 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-neutral-900 hover:after:w-full after:transition-all after:duration-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Triggers */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Recruiter View Toggle Button */}
          <button
            onClick={() => {
              console.log("Recruiter view clicked");
              onOpenRecruiterMode();
            }}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-medium rounded border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 touch-target cursor-pointer shadow-xs"
            title="Open 30-Second Recruiter Summary"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="text-[11px] sm:text-xs">Recruiter View</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-neutral-600 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded transition-colors touch-target cursor-pointer"
            aria-label="Search portfolio commands"
          >
            <Search className="w-3.5 h-3.5 text-neutral-500" />
            <span className="hidden md:inline">Search</span>
            <kbd className="hidden md:inline-block bg-white text-[10px] px-1.5 py-0.5 rounded border border-neutral-300 text-neutral-500 font-sans">
              ⌘K
            </kbd>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase font-mono rounded bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-200 touch-target"
          >
            <span>Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Search Button */}
          <button
            onClick={onOpenCommandPalette}
            className="sm:hidden p-2 text-neutral-700 hover:text-neutral-900 rounded-md touch-target flex items-center justify-center bg-neutral-100 border border-neutral-200 cursor-pointer"
            aria-label="Open command search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-neutral-900 focus:outline-none rounded-md touch-target flex items-center justify-center cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-neutral-900/40 backdrop-blur-xs z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-neutral-50 border-b border-neutral-200 px-6 py-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1 font-heading text-lg font-medium text-neutral-900 mb-6">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-neutral-200/60 hover:text-neutral-600 flex justify-between items-center touch-target"
                >
                  <span className="text-lg font-bold">{link.name}</span>
                  <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                </a>
              ))}
            </nav>

            <div className="space-y-3 pt-2 border-t border-neutral-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiterMode();
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold tracking-wide uppercase font-mono rounded bg-neutral-200 text-neutral-900 hover:bg-neutral-300 transition-colors w-full touch-target"
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>30-Sec Recruiter Summary</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wide uppercase font-mono rounded bg-neutral-900 text-white hover:bg-neutral-800 transition-colors w-full touch-target shadow-md"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
