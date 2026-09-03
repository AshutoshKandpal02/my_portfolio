import React from 'react';
import { journeyMilestones } from '../data/portfolio';
import { Calendar, CheckCircle2, GraduationCap, Briefcase, FolderGit2 } from 'lucide-react';

export default function Journey() {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Work Experience':
      case 'Current Role':
        return <Briefcase className="w-4 h-4 text-white" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-white" />;
      case 'Project':
        return <FolderGit2 className="w-4 h-4 text-white" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="journey" className="section-padding border-b border-neutral-200/80 bg-neutral-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">07 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-600">JOURNEY</span>
        </div>

        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-neutral-200 gap-2">
          <div>
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 safe-wrap">
              Professional Journey
            </h2>
            <p className="text-neutral-500 mt-1 sm:mt-2 text-fluid-body">
              Factual academic and career milestones.
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8 border-l-2 border-neutral-200 space-y-8 sm:space-y-10 my-4 max-w-4xl">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="reveal-init relative group">
              {/* Timeline Node Marker */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 flex items-center justify-center border-4 border-neutral-50 shadow-xs transition-transform group-hover:scale-110">
                {getTypeIcon(milestone.type)}
              </div>

              {/* Card Container */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-neutral-200 card-hover-border">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
                    {milestone.date}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 uppercase">
                    {milestone.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading mb-1 safe-wrap">
                  {milestone.title}
                </h3>

                {milestone.institution && (
                  <p className="text-xs sm:text-sm font-medium text-neutral-600 font-mono mb-2">
                    {milestone.institution}
                  </p>
                )}

                {milestone.details && (
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed safe-wrap">
                    {milestone.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
