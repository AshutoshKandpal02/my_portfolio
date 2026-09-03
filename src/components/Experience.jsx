import React, { useState } from 'react';
import { currentExperience } from '../data/portfolio';
import { Layout, MessageSquare, Database, Layers, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Experience() {
  const [expandedContribution, setExpandedContribution] = useState('realtime-chat');

  const areaIcons = [
    <MessageSquare className="w-5 h-5" />,
    <Layout className="w-5 h-5" />,
    <Database className="w-5 h-5" />,
    <Layers className="w-5 h-5" />
  ];

  return (
    <section id="experience" className="section-padding border-b border-neutral-200/80 bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">03 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-600">Work Experience</span>
        </div>

        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-neutral-200 gap-2">
          <div>
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 safe-wrap">
              Professional Experience
            </h2>
            <p className="text-neutral-500 mt-1 sm:mt-2 text-fluid-body">
              Frontend software engineering & real-time platform development.
            </p>
          </div>
        </div>

        {/* Company Header Card */}
        <div className="reveal-init bg-neutral-50 p-6 sm:p-8 lg:p-10 rounded-xl border border-neutral-200 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-200/70">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="p-2 bg-neutral-900 text-white rounded font-mono font-bold text-xs shrink-0">CA</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 font-heading safe-wrap">
                  {currentExperience.company}
                </h3>
              </div>
              <p className="text-base sm:text-lg font-semibold text-neutral-700">{currentExperience.role}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono text-neutral-600">
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded border border-neutral-200">
                <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span className="font-medium text-neutral-900">{currentExperience.period}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded border border-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>{currentExperience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-neutral-600 text-fluid-body mt-6 font-normal">
            {currentExperience.overview}
          </p>
        </div>

        {/* Interactive Selected Contributions Breakdown */}
        <div className="reveal-init">
          <h3 className="font-mono text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-4 flex items-center justify-between">
            <span>Selected Contributions & Engineering Breakdown</span>
            <span className="text-neutral-400">Click card to expand</span>
          </h3>

          <div className="space-y-4">
            {currentExperience.contributions.map((item, idx) => {
              const isExpanded = expandedContribution === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    isExpanded ? 'border-neutral-900 shadow-sm' : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {/* Item Toggle Header */}
                  <button
                    onClick={() => setExpandedContribution(isExpanded ? null : item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 touch-target focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-lg border shrink-0 ${isExpanded ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-100 text-neutral-800 border-neutral-200'}`}>
                        {React.cloneElement(areaIcons[idx], { className: 'w-4 h-4' })}
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest block mb-0.5">
                          {item.focusArea}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-neutral-900 font-heading safe-wrap">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline font-mono text-xs text-neutral-400">
                        {isExpanded ? 'Collapse' : 'Expand'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-neutral-900" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Body Details */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-neutral-100 space-y-4 animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-1">
                            Problem / Context
                          </span>
                          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed safe-wrap">
                            {item.problem}
                          </p>
                        </div>

                        <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-1">
                            Engineering Contribution
                          </span>
                          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed safe-wrap">
                            {item.contribution}
                          </p>
                        </div>
                      </div>

                      <div>
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
                          Technologies Used
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span key={tech} className="font-mono text-xs px-2.5 py-1 bg-neutral-900 text-white rounded font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
