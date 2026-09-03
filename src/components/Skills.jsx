import React from 'react';
import { skillsCategory } from '../data/portfolio';
import { Code, Terminal, Palette, Cpu } from 'lucide-react';

export default function Skills() {
  const categoryIcons = [
    <Code className="w-5 h-5 text-neutral-800" />,
    <Terminal className="w-5 h-5 text-neutral-800" />,
    <Palette className="w-5 h-5 text-neutral-800" />,
    <Cpu className="w-5 h-5 text-neutral-800" />
  ];

  return (
    <section id="skills" className="section-padding border-b border-neutral-200/80 bg-neutral-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">05 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-600">Technical Proficiency</span>
        </div>

        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-neutral-200 gap-2">
          <div>
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 safe-wrap">
              Technical Skills
            </h2>
            <p className="text-neutral-500 mt-1 sm:mt-2 text-fluid-body">
              Categorized technologies, tools, and languages.
            </p>
          </div>
        </div>


        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsCategory.map((cat, idx) => (
            <div
              key={cat.category}
              className="reveal-init bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 card-hover-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-200 shrink-0">
                      {categoryIcons[idx]}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading safe-wrap">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 bg-neutral-100 px-2 py-1 rounded">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group flex items-center gap-2 px-3 sm:px-3.5 py-2 bg-neutral-50 rounded-lg border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 safe-wrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-white transition-colors shrink-0"></span>
                      <span className="safe-wrap">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>{cat.skills.length} core competencies</span>
                <span className="text-neutral-300">///</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
