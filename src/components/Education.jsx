import React from 'react';
import { educationList, certifications } from '../data/portfolio';
import { GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-padding border-b border-neutral-200/80 bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="reveal-init flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-400">06 /</span>
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-600">Background</span>
        </div>

        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-neutral-200 gap-2">
          <div>
            <h2 className="text-fluid-h2 font-bold tracking-tight text-neutral-900 safe-wrap">
              Education & Certifications
            </h2>
            <p className="text-neutral-500 mt-1 sm:mt-2 text-fluid-body">
              Academic foundation and professional credentials.
            </p>
          </div>
        </div>


        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Education */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="reveal-init flex items-center gap-3 mb-4 sm:mb-6 pb-3 border-b border-neutral-200">
              <div className="p-2 bg-neutral-900 text-white rounded-md shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-heading">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="reveal-init bg-neutral-50 p-6 sm:p-8 rounded-xl border border-neutral-200 card-hover-border"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-200/70 px-2.5 py-1 rounded">
                      {edu.period}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-neutral-500">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading mb-2 safe-wrap">
                    {edu.degree}
                  </h4>

                  <p className="text-neutral-600 text-sm sm:text-base font-medium safe-wrap">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="reveal-init flex items-center gap-3 mb-4 sm:mb-6 pb-3 border-b border-neutral-200">
              <div className="p-2 bg-neutral-900 text-white rounded-md shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-heading">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="reveal-init bg-neutral-50 p-5 rounded-xl border border-neutral-200 card-hover-border flex items-start gap-4"
                >
                  <div className="p-2 bg-neutral-200/70 rounded text-neutral-800 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900 font-heading safe-wrap">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-neutral-500 mt-1">
                      Issuer: <span className="text-neutral-800 font-medium">{cert.issuer}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
