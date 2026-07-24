import React, { useState } from 'react';
import { SKILLS_DATA, TRANSLATIONS } from '../data/portfolioData';
import { SkillItem, Language } from '../types';
import { Award, Building2, PackageCheck, GraduationCap, BarChart3, Handshake, Megaphone, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>('skill-1');
  const t = TRANSLATIONS[lang];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <Award className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-300 dark:border-emerald-800">
            <Award className="w-4 h-4" />
            <span>Executive Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            {t.skillsTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans">
            {t.skillsSubtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_DATA.map((skill) => {
            const isExpanded = expandedSkillId === skill.id;

            return (
              <div
                key={skill.id}
                className={`bg-white dark:bg-slate-800 rounded-2xl border p-6 transition-all duration-300 shadow-sm ${
                  isExpanded
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                    : 'border-slate-200/90 dark:border-slate-700 hover:border-emerald-400'
                }`}
              >
                {/* Skill Top Bar */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 shrink-0">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg font-serif">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold font-sans dir-rtl">
                        {skill.nameUrdu}
                      </p>
                    </div>
                  </div>

                  <span className="text-2xl font-black font-serif text-emerald-700 dark:text-emerald-400 shrink-0">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="mt-4 space-y-1.5">
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-600">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                  {skill.description}
                </p>

                {/* Accordion Toggle */}
                <button
                  onClick={() => setExpandedSkillId(isExpanded ? null : skill.id)}
                  className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 w-full flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition-colors"
                >
                  <span>{isExpanded ? 'Hide Operational Highlights' : 'View Key Achievements'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Expanded Key Achievements */}
                {isExpanded && (
                  <div className="mt-3 pt-2 space-y-2 animate-in fade-in duration-200">
                    <h5 className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                      Impact Metrics & Milestones
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                      {skill.keyAchivements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-emerald-50/60 dark:bg-emerald-950/40 p-2 rounded-lg border border-emerald-100 dark:border-emerald-800/50">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Skill Summary Banner */}
        <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-700 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-200">
              100% Commitment to Measurable District Progress
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl font-sans">
              "Understanding the unique demographic and operational needs of each area in Islamabad to ensure the highest standard of service delivery across population welfare indicators."
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow transition-all shrink-0"
          >
            Request Official Collaboration
          </a>
        </div>

      </div>
    </section>
  );
};
