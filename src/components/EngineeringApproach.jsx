import React, { useState } from 'react';
import { engineeringApproach } from '../data/portfolio';
import { Compass, Layout, Code2, Network, CheckCircle2 } from 'lucide-react';

export default function EngineeringApproach() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Compass className="w-5 h-5 text-neutral-800" />,
    <Layout className="w-5 h-5 text-neutral-800" />,
    <Code2 className="w-5 h-5 text-neutral-800" />,
    <Network className="w-5 h-5 text-neutral-800" />,
    <CheckCircle2 className="w-5 h-5 text-neutral-800" />
  ];

  return (
    <section id="how-i-build" className="section-padding border-b border-neutral-200/80 bg-neutral-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">04 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-600">HOW I BUILD</span>
        </div>

        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-4 sm:pb-6 border-b border-neutral-200 gap-2">
          <div>
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 safe-wrap">
              How I approach building products.
            </h2>
            <p className="text-neutral-500 mt-1 sm:mt-2 text-fluid-body">
              A structured engineering approach for crafting robust frontend applications.
            </p>
          </div>
        </div>

        {/* Desktop Horizontal Process Grid / Mobile Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {engineeringApproach.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={item.step}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`reveal-init p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-neutral-900 shadow-md -translate-y-1'
                    : 'bg-white/60 border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg border transition-colors ${isSelected ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-100 text-neutral-800 border-neutral-200'}`}>
                      {React.cloneElement(stepIcons[idx], { className: `w-4 h-4 ${isSelected ? 'text-white' : 'text-neutral-800'}` })}
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 font-heading mb-2 safe-wrap">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed safe-wrap">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Stage {item.step}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-neutral-900' : 'bg-neutral-300'}`}></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
