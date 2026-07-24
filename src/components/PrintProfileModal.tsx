import React from 'react';
import { PROFILE_DATA, SKILLS_DATA, PORTFOLIO_ITEMS } from '../data/portfolioData';
import { X, Printer, ShieldCheck, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';

interface PrintProfileProps {
  onClose: () => void;
}

export const PrintProfileModal: React.FC<PrintProfileProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative my-8 font-serif">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-700" />
            <span className="font-bold text-sm text-slate-800 uppercase tracking-wider font-sans">
              Official Executive Profile Document (CV)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold font-sans rounded-xl shadow transition-all flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Export PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE DOCUMENT BODY */}
        <div className="space-y-8 print:p-0">
          
          {/* Header Banner */}
          <div className="border-b-2 border-emerald-800 pb-6 text-center space-y-2">
            <div className="text-xs uppercase font-sans font-bold tracking-widest text-emerald-800">
              GOVERNMENT OF PAKISTAN • ICT ADMINISTRATION
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              MUHAMMAD AYUB
            </h1>
            <h2 className="text-lg font-bold text-emerald-800 font-sans">
              District Population Welfare Officer (DPWO), Islamabad
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-slate-600 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" /> DHO Complex, Sector G-11/4, Islamabad
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-700" /> +92 (51) 9260142
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-700" /> dpwo.islamabad@pwd.gov.pk
              </span>
            </div>
          </div>

          {/* Biographic Narrative */}
          <div className="space-y-3 font-sans text-xs sm:text-sm leading-relaxed text-slate-800">
            <h3 className="text-base font-bold font-serif text-slate-900 border-b border-slate-200 pb-1 uppercase tracking-wider text-emerald-900">
              Official Executive Overview
            </h3>
            <p>{PROFILE_DATA.aboutBioParagraph1}</p>
            <p>{PROFILE_DATA.aboutBioParagraph2}</p>
          </div>

          {/* Academic Background */}
          <div className="space-y-2 font-sans text-xs sm:text-sm">
            <h3 className="text-base font-bold font-serif text-slate-900 border-b border-slate-200 pb-1 uppercase tracking-wider text-emerald-900">
              Academic Background
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block text-sm">Master of Arts (M.A.) in Political Science</span>
                <span className="text-slate-600 text-xs">Policy Formulation, Administrative Governance & State Affairs</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block text-sm">Bachelor of Science (B.Sc.) in Economics</span>
                <span className="text-slate-600 text-xs">Demographic Analytical Modeling, Resource Allocation & Statistics</span>
              </div>
            </div>
          </div>

          {/* Core Competencies Matrix */}
          <div className="space-y-3 font-sans text-xs sm:text-sm">
            <h3 className="text-base font-bold font-serif text-slate-900 border-b border-slate-200 pb-1 uppercase tracking-wider text-emerald-900">
              Core Competencies & Performance Rating
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {SKILLS_DATA.map((skill) => (
                <div key={skill.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                  <span className="font-semibold text-slate-800 text-xs">{skill.name}</span>
                  <span className="font-bold text-emerald-800 text-xs">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Field Operations & Events */}
          <div className="space-y-3 font-sans text-xs sm:text-sm">
            <h3 className="text-base font-bold font-serif text-slate-900 border-b border-slate-200 pb-1 uppercase tracking-wider text-emerald-900">
              Key Field Inspections & Event Logs
            </h3>
            <div className="space-y-2 pt-1">
              {PORTFOLIO_ITEMS.slice(0, 6).map((item) => (
                <div key={item.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">{item.title}</span>
                    <span className="text-[11px] text-slate-600">{item.location} • {item.category}</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 shrink-0">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official Verification Footer */}
          <div className="pt-8 border-t-2 border-emerald-800 flex items-center justify-between text-xs font-sans text-slate-500">
            <div>
              <p className="font-bold text-slate-800">OFFICE OF DISTRICT POPULATION WELFARE OFFICER</p>
              <p>Islamabad Capital Territory Administration</p>
            </div>
            <div className="text-right border-t border-slate-400 pt-2 px-4">
              <p className="font-serif font-bold text-slate-900">MR. MUHAMMAD AYUB</p>
              <p className="text-[10px]">DPWO Islamabad Stamp / Sign</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
