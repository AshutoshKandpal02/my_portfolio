import React, { useState } from 'react';
import { skillsWithContext } from '../data/portfolio';
import { Code, Terminal, Palette, Cpu, Info, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState({
    name: "React.js",
    context: "Used professionally for building responsive LMS platform interfaces.",
    tag: "Professional"
  });

  const categoryIcons = [
    <Code className="w-5 h-5 text-neutral-800" />,
    <Terminal className="w-5 h-5 text-neutral-800" />,
    <Palette className="w-5 h-5 text-neutral-800" />,
    <Cpu className="w-5 h-5 text-neutral-800" />
  ];

  return (
    <section id="skills" className="section-padding border-b border-neutral-200/80 bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">06 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-600">Technical Proficiency</span>
        </div>

        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-neutral-200 gap-2">
          <div>
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 safe-wrap">
              Technical Skills & Context
            </h2>
            <p className="text-neutral-500 mt-1 sm:mt-2 text-fluid-body">
              Categorized skills with explicit professional and application context.
            </p>
          </div>
        </div>

        {/* Contextual Disclosure Tooltip Box */}
        {activeSkill && (
          <div className="reveal-init mb-8 p-4 sm:p-5 bg-neutral-900 text-white rounded-xl border border-neutral-800 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-emerald-400" />
                <span>Skill Context Inspector</span>
              </span>
              <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-neutral-800 text-emerald-400 rounded border border-neutral-700 font-semibold">
                {activeSkill.tag} Experience
              </span>
            </div>
            <p className="text-sm sm:text-base font-medium font-mono text-neutral-100">
              <span className="text-white font-bold">{activeSkill.name}</span> — {activeSkill.context}
            </p>
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsWithContext.map((cat, idx) => (
            <div
              key={cat.category}
              className="reveal-init bg-neutral-50 p-6 sm:p-8 rounded-xl border border-neutral-200 card-hover-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-200/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white rounded-lg border border-neutral-200 shrink-0">
                      {categoryIcons[idx]}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading safe-wrap">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 bg-white px-2 py-1 rounded border border-neutral-200">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item) => {
                    const isSelected = activeSkill.name === item.name;
                    return (
                      <button
                        key={item.name}
                        onMouseEnter={() => setActiveSkill(item)}
                        onClick={() => setActiveSkill(item)}
                        className={`group flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 touch-target ${
                          isSelected
                            ? 'bg-neutral-900 text-white shadow-xs'
                            : 'bg-white text-neutral-800 border border-neutral-200 hover:border-neutral-900'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-400' : 'bg-neutral-400'} shrink-0`}></span>
                        <span className="safe-wrap">{item.name}</span>
                        {item.tag === 'Professional' && (
                          <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded uppercase ${isSelected ? 'bg-neutral-800 text-emerald-300' : 'bg-neutral-200 text-neutral-600'}`}>
                            Pro
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>{cat.items.length} items</span>
                <span className="text-neutral-300">Hover item for usage context</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
