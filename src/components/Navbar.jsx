import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200/80 py-3 sm:py-4 shadow-sm'
          : 'bg-transparent py-4 sm:py-6 border-b border-transparent'
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
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-600"
          aria-label="Desktop navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-neutral-900 transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-neutral-900 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase font-mono rounded border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-200 touch-target"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-800 hover:text-neutral-900 focus:outline-none rounded-md touch-target flex items-center justify-center"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-neutral-900/40 backdrop-blur-xs z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-neutral-50 border-b border-neutral-200 px-6 py-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2 font-heading text-lg font-medium text-neutral-900">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 border-b border-neutral-200/60 hover:text-neutral-600 flex justify-between items-center touch-target"
                >
                  <span className="text-xl font-bold">{link.name}</span>
                  <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold tracking-wide uppercase font-mono rounded bg-neutral-900 text-white hover:bg-neutral-800 transition-colors w-full touch-target shadow-md"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
