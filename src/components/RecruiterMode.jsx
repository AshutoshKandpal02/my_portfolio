import React, { useEffect } from 'react';
import { X, FileText, ArrowUpRight, CheckCircle2, Mail, Briefcase, Code2, FolderGit2 } from 'lucide-react';
import { personalDetails, currentExperience, projects } from '../data/portfolio';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function RecruiterMode({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerResumeDownload = () => {
    const link = document.createElement('a');
    link.href = personalDetails.resumePath;
    link.download = "Ashutosh_Kandpal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-neutral-900/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full border border-neutral-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-neutral-200 bg-neutral-900 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-xs text-neutral-300 uppercase tracking-widest">
                Recruiter Executive Summary
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              {personalDetails.name}
            </h3>
            <p className="text-xs font-mono text-neutral-400 mt-0.5">
              {personalDetails.role} — {personalDetails.subRole} ({personalDetails.location})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close recruiter summary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Executive Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-sm text-neutral-800">
          
          {/* Quick Pitch */}
          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h4 className="font-mono text-xs font-semibold uppercase text-neutral-500 mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-neutral-800" />
              <span>Executive Brief</span>
            </h4>
            <p className="text-neutral-700 leading-relaxed text-xs sm:text-sm">
              Frontend software developer specializing in React.js, responsive user interfaces, RESTful API integrations, and WebSockets real-time communication modules. Experienced in translating complex Figma and Adobe XD designs into high-performance web applications.
            </p>
          </div>

          {/* Core Stack */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase text-neutral-500 mb-2.5">
              Core Technical Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {["React.js", "JavaScript", "UI/UX", "RESTful APIs", "WebSockets", "Redux", "Tailwind CSS", "Git"].map((tech) => (
                <span key={tech} className="font-mono text-xs font-semibold px-3 py-1 bg-neutral-900 text-white rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Current Experience */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase text-neutral-500 mb-2.5 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-neutral-700" />
              <span>Current Work Experience</span>
            </h4>
            <div className="p-4 rounded-lg border border-neutral-200 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-bold text-base text-neutral-900">{currentExperience.company}</span>
                <span className="font-mono text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded border">
                  {currentExperience.period}
                </span>
              </div>
              <p className="text-xs font-mono font-medium text-neutral-700 mb-3">{currentExperience.role}</p>
              <ul className="space-y-1.5 text-xs text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 mt-0.5 shrink-0" />
                  <span>Engineered real-time chat module within LMS platform using WebSockets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 mt-0.5 shrink-0" />
                  <span>Built high-performance React.js frontend components for desktop & mobile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 mt-0.5 shrink-0" />
                  <span>Translated Figma & Adobe XD prototypes into production UI components.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Selected Work */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase text-neutral-500 mb-2.5 flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4 text-neutral-700" />
              <span>Selected Project Case Studies</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">{proj.period}</span>
                  <h5 className="font-bold text-sm text-neutral-900 mb-1">{proj.title}</h5>
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.map((t) => (
                      <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-neutral-200 text-neutral-800 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Recruiter Actions Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-200 bg-neutral-50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={triggerResumeDownload}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider rounded bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-sm touch-target"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded border border-neutral-300 text-neutral-800 hover:bg-neutral-200 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded border border-neutral-300 text-neutral-800 hover:bg-neutral-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <a
              href={`mailto:${personalDetails.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
