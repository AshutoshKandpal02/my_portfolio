import React from 'react';
import { ArrowDown, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { personalDetails } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 flex flex-col justify-between border-b border-neutral-200/80 relative overflow-hidden">
      <div className="container-custom my-auto w-full">
        
        {/* Editorial Subheader Metadata */}
        <div className="reveal-init inline-flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-xs font-mono tracking-wider uppercase text-neutral-600 bg-neutral-100 px-3 py-1.5 sm:py-2 rounded-md border border-neutral-200 max-w-full">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-semibold text-neutral-900">{personalDetails.role.toUpperCase()}</span>
          </div>
          <span className="text-neutral-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-neutral-600">
            <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="truncate">Based in India</span>
          </div>
          <span className="text-neutral-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-neutral-600">
            <Briefcase className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="truncate">Creditor Academy</span>
          </div>
        </div>

        {/* Large Editorial Title with Fluid Clamp */}
        <div className="reveal-init mb-4 sm:mb-6 max-w-5xl">
          <h1 className="text-fluid-hero font-bold tracking-tight text-neutral-900 leading-[1.05] safe-wrap">
            SOFTWARE DEVELOPER
          </h1>
          <p className="text-fluid-hero-sub font-light text-neutral-500 tracking-tight mt-1 sm:mt-2 leading-[1.1] safe-wrap">
            Building thoughtful digital experiences.
          </p>
        </div>

        {/* Narrative Description */}
        <p className="reveal-init text-fluid-body text-neutral-600 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8 safe-wrap">
          {personalDetails.heroSummary}
        </p>

        {/* Action CTAs */}
        <div className="reveal-init flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono rounded bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-200 shadow-sm touch-target w-full sm:w-auto"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono rounded bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-100 transition-all duration-200 touch-target w-full sm:w-auto"
          >
            <span>Get In Touch</span>
          </a>
        </div>
      </div>

      {/* Hero Bottom Meta Bar */}
      <div className="container-custom mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-neutral-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-neutral-500 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-neutral-400">01 /</span>
          <span className="text-neutral-800 font-medium truncate">React.js & Real-Time Engineering</span>
        </div>
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 transition-colors py-1 touch-target"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

