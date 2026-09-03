import React from 'react';
import { personalDetails } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs font-mono">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-neutral-500">
          <span>Designed & built with React</span>
          <span>•</span>
          <a
            href="#"
            className="hover:text-white transition-colors underline underline-offset-4 py-1 touch-target inline-flex items-center"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
