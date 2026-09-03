import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { ArrowUpRight, Calendar, Check, Image as ImageIcon, Info, X, ExternalLink } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding border-b border-neutral-200/80 bg-neutral-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">05 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-600">Selected Work</span>
        </div>

        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-neutral-200 gap-2">
          <div>
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 safe-wrap">
              Things I've built.
            </h2>
            <p className="text-neutral-500 mt-1 sm:mt-2 text-fluid-body">
              Mobile & real-time application case studies.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="reveal-init bg-white rounded-xl border border-neutral-200 overflow-hidden card-hover-border flex flex-col justify-between group cursor-pointer"
            >
              {/* Responsive Project Visual Media Area */}
              <div>
                <div className="relative aspect-video w-full bg-neutral-950 p-4 sm:p-6 flex flex-col justify-between overflow-hidden border-b border-neutral-200">
                  {/* Subtle Architectural Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:1.75rem_1.75rem] opacity-25"></div>
                  
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-300 bg-neutral-900/90 px-2.5 py-1 rounded border border-neutral-800 truncate">
                      {project.type}
                    </span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-neutral-400">
                      {project.id}
                    </span>
                  </div>

                  <div className="relative z-10 my-auto text-center py-4 sm:py-6">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="inline-flex items-center gap-2 text-neutral-400 mb-1">
                          <ImageIcon className="w-4 h-4 opacity-70 shrink-0" />
                          <span className="font-mono text-[11px] uppercase tracking-wider">PROJECT PREVIEW</span>
                        </div>
                        <p className="text-[11px] text-neutral-500 font-mono">
                          {/* TODO: Add real project screenshot */}
                          [ Screenshot coming soon ]
                        </p>
                      </>
                    )}
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] font-medium text-neutral-300 bg-neutral-900/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors font-heading mb-2 safe-wrap flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-4">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.period}</span>
                  </div>

                  <p className="text-neutral-600 text-sm sm:text-base mb-6 leading-relaxed safe-wrap">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-4 text-xs sm:text-sm text-neutral-700">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0"></span>
                        <span className="leading-snug safe-wrap">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-neutral-200/60 mt-auto flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 group-hover:underline">
                  <span>View Case Study Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>

                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-xs font-mono text-neutral-400 hover:text-neutral-700" title="GitHub Repo Placeholder">
                    <GithubIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-900/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full border border-neutral-300 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div>
                <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest block">
                  Project Case Study #{selectedProject.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-heading safe-wrap">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors touch-target flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs font-mono text-neutral-600 pb-4 border-b border-neutral-100">
                <div>
                  <span className="text-neutral-400">Period: </span>
                  <span className="text-neutral-900 font-medium">{selectedProject.period}</span>
                </div>
                <div>
                  <span className="text-neutral-400">Type: </span>
                  <span className="text-neutral-900 font-medium">{selectedProject.type}</span>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">Overview</h4>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed safe-wrap">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3">What I Built & Key Functionality</h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800 bg-neutral-50 p-3 rounded border border-neutral-200">
                      <Check className="w-4 h-4 text-neutral-900 mt-0.5 shrink-0" />
                      <span className="safe-wrap">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-xs font-semibold px-3 py-1 bg-neutral-900 text-white rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Note */}
              <div className="p-4 bg-amber-50 rounded border border-amber-200 text-xs font-mono text-amber-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="safe-wrap">
                  <span className="font-semibold block mb-1">Developer Note for Screenshots & Links:</span>
                  To add project screenshots, live demo links, or GitHub URLs, edit the corresponding fields in <code className="bg-amber-100 px-1 py-0.5 rounded">src/data/portfolio.js</code>.
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider border border-neutral-300 rounded text-neutral-700 hover:bg-neutral-200 transition-colors touch-target"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
