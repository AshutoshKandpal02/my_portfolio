import React from 'react';
import { currently } from '../data/portfolio';
import { Radio, Briefcase, Code, Sparkles } from 'lucide-react';

export default function Currently() {
  return (
    <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-xl border border-neutral-800 shadow-md">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-300">
            CURRENTLY
          </span>
        </div>
        <Radio className="w-4 h-4 text-neutral-400" />
      </div>

      <div className="space-y-4 font-mono text-xs">
        <div>
          <span className="text-neutral-400 uppercase tracking-wider block mb-1">Building</span>
          <span className="text-neutral-100 font-medium leading-relaxed block">{currently.building}</span>
        </div>

        <div>
          <span className="text-neutral-400 uppercase tracking-wider block mb-1">Role & Company</span>
          <span className="text-neutral-100 font-medium block">{currently.role} @ {currently.company}</span>
        </div>

        <div>
          <span className="text-neutral-400 uppercase tracking-wider block mb-1">Current Focus</span>
          <span className="text-neutral-100 font-medium block">{currently.focus}</span>
        </div>

        <div className="pt-3 border-t border-neutral-800 flex items-center gap-2 text-emerald-400">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>{currently.status}</span>
        </div>
      </div>
    </div>
  );
}
