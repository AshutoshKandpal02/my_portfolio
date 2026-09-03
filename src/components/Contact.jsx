import React, { useState } from 'react';
import { personalDetails } from '../data/portfolio';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-padding border-b border-neutral-200/80 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Background Architectural Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-20 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Label */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">07 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-300">Get In Touch</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Headline & Email Container */}
          <div className="lg:col-span-7 reveal-init">
            <h2 className="text-fluid-h2 font-bold tracking-tight text-white leading-[1.08] mb-6 safe-wrap">
              Let's build something useful.
            </h2>
            
            <p className="text-fluid-body text-neutral-400 max-w-xl font-normal leading-relaxed mb-6 sm:mb-8 safe-wrap">
              I'm always open to discussing interesting projects, opportunities and ideas.
            </p>

            {/* Email Prominent Card */}
            <div className="bg-neutral-800/80 border border-neutral-700/80 rounded-xl p-5 sm:p-8 backdrop-blur-sm max-w-xl mb-6">

              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-3">
                Primary Contact
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="text-lg sm:text-2xl font-bold font-mono text-white hover:text-neutral-300 transition-colors safe-wrap"
                >
                  {personalDetails.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider rounded bg-neutral-700 text-neutral-200 hover:bg-neutral-600 hover:text-white transition-colors shrink-0 touch-target"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Mailto CTA */}
            <a
              href={`mailto:${personalDetails.email}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono rounded bg-white text-neutral-900 hover:bg-neutral-200 transition-colors shadow-sm touch-target w-full sm:w-auto"
            >
              <Send className="w-4 h-4" />
              <span>Send An Email</span>
            </a>
          </div>

          {/* Social Profiles & Details */}
          <div className="lg:col-span-5 reveal-init space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-700/60 p-6 sm:p-8 rounded-xl">
              <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 pb-3 border-b border-neutral-700">
                Connect & Profiles
              </h3>

              <div className="space-y-3.5">
                {/* LinkedIn */}
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-neutral-900/60 rounded-lg border border-neutral-700/60 text-white hover:bg-neutral-800 hover:border-neutral-500 transition-all group touch-target"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-neutral-300 shrink-0" />
                    <div>
                      <span className="font-bold text-sm block">LinkedIn</span>
                      <span className="font-mono text-xs text-neutral-400 truncate block">ashutosh-kandpal-b9b512198</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </a>

                {/* GitHub */}
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-neutral-900/60 rounded-lg border border-neutral-700/60 text-white hover:bg-neutral-800 hover:border-neutral-500 transition-all group touch-target"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-neutral-300 shrink-0" />
                    <div>
                      <span className="font-bold text-sm block">GitHub</span>
                      <span className="font-mono text-xs text-neutral-400 truncate block">AshutoshKandpal02</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </a>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-700/60 text-xs font-mono text-neutral-400 flex items-center justify-between">
                <span>Location: Delhi, India</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
