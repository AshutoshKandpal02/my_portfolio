import React from 'react';
import { personalDetails } from '../data/portfolio';
import { Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding border-b border-neutral-200/80 bg-white">
      <div className="container-custom">
        
        {/* Section Header Label */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">02 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-600">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Main Editorial Quote/Headline */}
          <div className="lg:col-span-7 reveal-init">
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 leading-[1.15] mb-6 sm:mb-8 text-left safe-wrap">
              "{personalDetails.aboutHeading}"
            </h2>

            <div className="space-y-4 sm:space-y-6 text-neutral-600 text-fluid-body font-normal text-left">
              {personalDetails.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Core Focus Card */}
          <div className="lg:col-span-5 reveal-init mt-4 lg:mt-0">
            <div className="bg-neutral-50 p-6 sm:p-8 rounded-xl border border-neutral-200">
              <h3 className="font-mono text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-6 pb-3 border-b border-neutral-200 flex items-center justify-between">
                <span>Core Focus & Approach</span>
                <Code2 className="w-4 h-4 text-neutral-400 shrink-0" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {personalDetails.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-neutral-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
                    <span className="safe-wrap">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-500 flex flex-wrap items-center gap-2">
                <span className="text-neutral-900 font-semibold">{personalDetails.currentCompany}</span>
                <span>— Current Role</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
