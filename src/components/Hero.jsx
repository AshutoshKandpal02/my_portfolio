import React, { useState } from 'react';
import { ArrowDown, MapPin, Briefcase, ArrowRight, CheckCircle2, Code2 } from 'lucide-react';
import { personalDetails, heroCapabilities, currently } from '../data/portfolio';

export default function Hero() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section className="pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 flex flex-col justify-between border-b border-neutral-200/80 relative overflow-hidden">
      <div className="container-custom my-auto w-full">
        
        {/* Responsive Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Main Editorial Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Metadata Badge */}
            <div className="reveal-init inline-flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono tracking-wider uppercase text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-md border border-neutral-200 max-w-full">
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

            {/* Headline */}
            <div className="reveal-init">
              <h1 className="text-fluid-hero font-bold tracking-tight text-neutral-900 leading-[1.05] safe-wrap">
                SOFTWARE DEVELOPER
              </h1>
              <p className="text-fluid-hero-sub font-light text-neutral-500 tracking-tight mt-1 sm:mt-2 leading-[1.1] safe-wrap">
                Building thoughtful digital experiences.
              </p>
            </div>

            {/* Description */}
            <p className="reveal-init text-fluid-body text-neutral-600 font-normal leading-relaxed safe-wrap max-w-2xl">
              {personalDetails.heroSummary}
            </p>

            {/* Action CTAs */}
            <div className="reveal-init flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono rounded bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-200 shadow-sm touch-target w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono rounded bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-100 transition-all duration-200 touch-target w-full sm:w-auto"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Capabilities Card & Current Role Card */}
          <div className="lg:col-span-5 space-y-5 reveal-init mt-2 lg:mt-0">
            
            {/* Engineering Capabilities Card */}
            <div className="p-5 sm:p-6 bg-white rounded-xl border border-neutral-200 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-neutral-800" />
                  <span>Engineering Capabilities</span>
                </span>
                <span className="text-[11px] text-neutral-400">Interactive</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {heroCapabilities.map((cap, idx) => {
                  const isSelected = activeCapability === idx;
                  return (
                    <button
                      key={cap.title}
                      onMouseEnter={() => setActiveCapability(idx)}
                      onClick={() => setActiveCapability(idx)}
                      className={`px-3 py-1.5 text-xs font-mono font-medium rounded transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 text-white shadow-xs'
                          : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-400' : 'bg-neutral-400'}`}></span>
                      <span>{cap.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Contextual Box */}
              <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200/90 text-xs font-mono text-neutral-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 block mb-0.5">
                    {heroCapabilities[activeCapability].title} ({heroCapabilities[activeCapability].shortKey}):
                  </span>
                  <span className="text-neutral-600 leading-relaxed">
                    {heroCapabilities[activeCapability].description}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Status Card */}
            <div className="p-4 sm:p-5 bg-neutral-900 text-white rounded-xl border border-neutral-800 font-mono text-xs flex items-center justify-between gap-4">
              <div>
                <span className="text-neutral-400 uppercase tracking-widest text-[10px] block mb-1">Current Position</span>
                <span className="font-bold text-sm block">{currently.role}</span>
                <span className="text-neutral-300 text-xs">{currently.company}</span>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 bg-neutral-800 text-emerald-400 px-2.5 py-1 rounded border border-neutral-700 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Active</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Hero Bottom Meta Bar */}
      <div className="container-custom mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-neutral-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-neutral-500 gap-2">
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
