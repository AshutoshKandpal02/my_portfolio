import React from 'react';
import { personalDetails } from '../data/portfolio';
import Currently from './Currently';
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
          
          {/* Left Main Editorial Headline & Paragraphs */}
          <div className="lg:col-span-7 reveal-init space-y-6">
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 leading-[1.15] text-left safe-wrap">
              "{personalDetails.aboutHeading}"
            </h2>

            <div className="space-y-4 sm:space-y-6 text-neutral-600 text-fluid-body font-normal text-left">
              {personalDetails.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Focus Pills */}
            <div className="pt-4">
              <h3 className="font-mono text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>Core Competencies & Engineering Focus</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalDetails.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1.5 bg-neutral-100 text-neutral-800 rounded border border-neutral-200 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Currently Status Card */}
          <div className="lg:col-span-5 reveal-init mt-2 lg:mt-0">
            <Currently />
          </div>

        </div>
      </div>
    </section>
  );
}
