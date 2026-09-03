import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowUpRight, User, Briefcase, Code, FolderGit2, Cpu, GraduationCap, Mail, FileText, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolio';


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

export default function CommandPalette({ isOpen, onClose, onOpenRecruiterMode }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    { id: 'about', title: 'Go to About Me', category: 'Navigation', icon: <User className="w-4 h-4" />, action: () => navigateTo('#about') },
    { id: 'experience', title: 'Go to Work Experience', category: 'Navigation', icon: <Briefcase className="w-4 h-4" />, action: () => navigateTo('#experience') },
    { id: 'how-i-build', title: 'Go to How I Build', category: 'Navigation', icon: <Code className="w-4 h-4" />, action: () => navigateTo('#how-i-build') },
    { id: 'projects', title: 'Go to Selected Projects', category: 'Navigation', icon: <FolderGit2 className="w-4 h-4" />, action: () => navigateTo('#projects') },
    { id: 'skills', title: 'Go to Technical Skills', category: 'Navigation', icon: <Cpu className="w-4 h-4" />, action: () => navigateTo('#skills') },
    { id: 'journey', title: 'Go to Journey / Milestones', category: 'Navigation', icon: <Sparkles className="w-4 h-4" />, action: () => navigateTo('#journey') },
    { id: 'education', title: 'Go to Education', category: 'Navigation', icon: <GraduationCap className="w-4 h-4" />, action: () => navigateTo('#education') },
    { id: 'contact', title: 'Go to Contact Section', category: 'Navigation', icon: <Mail className="w-4 h-4" />, action: () => navigateTo('#contact') },
    { id: 'recruiter', title: 'Open 30-Second Recruiter Summary', category: 'Actions', icon: <Sparkles className="w-4 h-4 text-emerald-600" />, action: () => { onClose(); onOpenRecruiterMode(); } },
    { id: 'resume', title: 'Download Resume (PDF)', category: 'Actions', icon: <FileText className="w-4 h-4" />, action: () => triggerResumeDownload() },
    { id: 'github', title: 'Open GitHub Profile', category: 'External Links', icon: <GithubIcon className="w-4 h-4" />, action: () => window.open(personalDetails.github, '_blank') },
    { id: 'linkedin', title: 'Open LinkedIn Profile', category: 'External Links', icon: <LinkedinIcon className="w-4 h-4" />, action: () => window.open(personalDetails.linkedin, '_blank') },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const navigateTo = (href) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerResumeDownload = () => {
    onClose();
    // TODO: Verify resume.pdf exists in /public directory
    const link = document.createElement('a');
    link.href = personalDetails.resumePath;
    link.download = "Ashutosh_Kandpal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    setSelectedIndex(0);

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 bg-neutral-900/60 backdrop-blur-xs animate-in fade-in duration-150 pt-16 sm:pt-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-xl max-w-xl w-full border border-neutral-300 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-neutral-200 flex items-center gap-3 bg-neutral-50">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search portfolio..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            aria-label="Search command palette"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md hover:bg-neutral-200 transition-colors"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 overflow-y-auto max-h-[60vh]">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-neutral-400">
              No matching commands found.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left text-sm transition-colors ${
                      isSelected
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-800 hover:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isSelected ? 'text-white' : 'text-neutral-500'}>
                        {cmd.icon}
                      </span>
                      <span className="font-medium text-xs sm:text-sm">{cmd.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                          isSelected
                            ? 'bg-neutral-800 text-neutral-300 border-neutral-700'
                            : 'bg-neutral-100 text-neutral-500 border-neutral-200'
                        }`}
                      >
                        {cmd.category}
                      </span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="p-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <span><kbd className="bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-700">↑</kbd> <kbd className="bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-700">↓</kbd> Navigate</span>
            <span><kbd className="bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-700">↵</kbd> Select</span>
          </div>
          <span><kbd className="bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-700">ESC</kbd> Close</span>
        </div>

      </div>
    </div>
  );
}
