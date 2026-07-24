import React from 'react';
import { BookOpen, ShieldCheck, HeartHandshake, FileSpreadsheet, Building2, Target, CheckCircle2, Award } from 'lucide-react';
import { PROFILE_DATA, TRANSLATIONS } from '../data/portfolioData';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-300 dark:border-emerald-800">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Biographic Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            {t.aboutTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Biography text cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Bio Card 1 */}
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-700/80 space-y-4">
              <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400 font-bold text-lg font-serif border-b border-slate-100 dark:border-slate-700 pb-3">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <span>Leadership in District Population Welfare</span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-sans font-normal">
                {PROFILE_DATA.aboutBioParagraph1}
              </p>
            </div>

            {/* Primary Bio Card 2 */}
            <div className="bg-emerald-900/5 dark:bg-emerald-950/30 p-6 sm:p-8 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 space-y-4">
              <div className="flex items-center gap-3 text-emerald-800 dark:text-emerald-300 font-bold text-lg font-serif border-b border-emerald-200/60 dark:border-emerald-800/60 pb-3">
                <Target className="w-5 h-5 text-emerald-600" />
                <span>Community Partnership & Operational Vision</span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-sans font-normal">
                {PROFILE_DATA.aboutBioParagraph2}
              </p>
            </div>

            {/* Academic Foundation Box */}
            <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-6 rounded-2xl shadow-md border border-emerald-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-emerald-500/50 flex items-center justify-center text-amber-300 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-base text-amber-100">Academic Foundation</h4>
                  <p className="text-xs text-emerald-200">Political Science & Economics Analytical Perspective</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1 bg-emerald-950/80 border border-emerald-600/60 rounded-lg text-emerald-200">M.A. Political Science</span>
                <span className="px-3 py-1 bg-emerald-950/80 border border-emerald-600/60 rounded-lg text-emerald-200">B.Sc Economics</span>
              </div>
            </div>

          </div>

          {/* Right Side: Governance Pillars & Strategic Objectives */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Core Governance Pillars</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-lg shrink-0">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Policy Formulation & Execution</h5>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">Translating federal and provincial population guidelines into concrete field deliverables.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <div className="p-2 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded-lg shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Field Operations & Facility Oversight</h5>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">Direct supervision of Basic Health Units (BHUs), RHCs, and Community Centers across ICT.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-lg shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Inter-Agency & Donor Coordination</h5>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">Active collaboration with Marie Stopes Society, CEWG, UNFPA, and provincial health departments.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-lg shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Targeted IEC Advocacy Campaigns</h5>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">Community orientation drives maximizing reproductive health awareness across rural and urban sectors.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Officer Callout */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs leading-relaxed space-y-1">
              <span className="font-bold block text-sm font-serif">District Population Mandate:</span>
              <span>Serving all 5 Urban Sub-divisions and 12 Rural Union Councils of Islamabad Capital Territory with inclusive, accessible, and high-quality healthcare facilities.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
