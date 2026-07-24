import React from 'react';
import { ShieldCheck, Award, Building2, Users, Target, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA, TRANSLATIONS } from '../data/portfolioData';
import { Language, TabType } from '../types';

interface HeroProps {
  lang: Language;
  onSelectTab: (tab: TabType) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onSelectTab,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white overflow-hidden py-12 sm:py-20 px-4 sm:px-8 border-b border-emerald-800/40 min-h-[calc(100vh-120px)] flex flex-col justify-center">
      {/* Subtle Background Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Details & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Government Seal & Official Title Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-600/50 text-emerald-200 text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Government of Pakistan • ICT Administration</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-serif text-amber-50">
                MUHAMMAD AYUB
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-emerald-300 font-sans">
                District Population Welfare Officer (DPWO), Islamabad
              </p>
            </div>

            {/* Executive Bio Summary */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal opacity-95">
              Committed district executive leading strategic planning, field monitoring, and population welfare policy execution across the Islamabad Capital Territory. Expert in Family Planning, Reproductive Healthcare, and Mother & Child Health services.
            </p>

            {/* Quick Badges / Academic Highlights */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-md bg-emerald-900/80 border border-emerald-700/80 text-emerald-200 font-medium">
                🎓 M.A. Political Science
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-900/80 border border-emerald-700/80 text-emerald-200 font-medium">
                📊 B.Sc. Economics
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-900/80 border border-emerald-700/80 text-emerald-200 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" /> Islamabad Capital Territory
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full">
              <button
                onClick={() => onSelectTab('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.btnScheduleMeeting}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onSelectTab('portfolio')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/60 text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Award className="w-4 h-4 text-emerald-300" />
                <span>{t.btnViewPortfolio}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Profile Picture & Official Badge Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-3xl blur-md opacity-70 animate-pulse" />
              
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-3 shadow-2xl overflow-hidden"
              >
                {/* Profile Image */}
                <div className="aspect-square rounded-2xl overflow-hidden relative bg-emerald-950 group">
                  <motion.img
                    src={PROFILE_DATA.profileImage}
                    alt="Muhammad Ayub - DPWO Islamabad"
                    animate={{ scale: [1.02, 1.05, 1.02] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <p className="text-base font-bold font-serif text-amber-100">MR. MUHAMMAD AYUB</p>
                    <p className="text-xs text-emerald-300">District Population Welfare Officer, ICT</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Key Metrics Bar */}
        <div className="pt-8 border-t border-emerald-800/50 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PROFILE_DATA.keyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-4 hover:border-emerald-500/60 transition-all text-center sm:text-left group"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 mb-1">
                {metric.icon === 'Hospital' && <Building2 className="w-5 h-5 text-emerald-400" />}
                {metric.icon === 'Users' && <Users className="w-5 h-5 text-amber-400" />}
                {metric.icon === 'Target' && <Target className="w-5 h-5 text-emerald-300" />}
                {metric.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-amber-300" />}
                <span className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
                  {metric.value}
                </span>
              </div>
              <div className="text-xs font-medium text-emerald-200">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

