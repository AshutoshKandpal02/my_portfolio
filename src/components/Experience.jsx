import React from 'react';
import { currentExperience } from '../data/portfolio';
import { Layout, MessageSquare, Database, Layers, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const areaIcons = [
    <Layout className="w-5 h-5 text-neutral-800" />,
    <MessageSquare className="w-5 h-5 text-neutral-800" />,
    <Database className="w-5 h-5 text-neutral-800" />,
    <Layers className="w-5 h-5 text-neutral-800" />
  ];

  return (
    <section id="experience" className="section-padding border-b border-neutral-200/80 bg-neutral-50">
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
        <div className="reveal-init bg-white p-6 sm:p-8 lg:p-10 rounded-xl border border-neutral-200 mb-6 sm:mb-8 shadow-sm">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-neutral-100">
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
              <div className="flex items-center gap-1.5 bg-neutral-100 px-3 py-2 rounded border border-neutral-200">
                <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span className="font-medium text-neutral-900">{currentExperience.period}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-100 px-3 py-2 rounded border border-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>{currentExperience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-neutral-600 text-fluid-body mt-6 font-normal">
            {currentExperience.overview}
          </p>
        </div>

        {/* 4 Categorized Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentExperience.focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="reveal-init bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 card-hover-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-200 shrink-0">
                    {areaIcons[idx]}
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 bg-neutral-100 px-2 py-1 rounded">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 font-heading safe-wrap">
                  {area.title}
                </h4>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed safe-wrap">
                  {area.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
                <span>Factual Responsibility Breakdown</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
