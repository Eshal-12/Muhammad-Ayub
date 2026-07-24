import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, Linkedin, Facebook, ExternalLink, Building2, Globe } from 'lucide-react';
import { PROFILE_DATA, TRANSLATIONS } from '../data/portfolioData';
import { Language, TabType } from '../types';

interface FooterProps {
  lang: Language;
  onSelectTab?: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onSelectTab }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTab = (tab: TabType) => {
    if (onSelectTab) {
      onSelectTab(tab);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.vozecEsIi9YU09ocNhf4bAHaHS?pid=Api&P=0&h=220"
                alt="DPWO Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-contain rounded-xl bg-white p-0.5 shadow-md border border-emerald-800"
              />
              <div>
                <h3 className="font-bold font-serif text-white text-lg leading-tight">
                  MUHAMMAD AYUB
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  District Population Welfare Officer, ICT
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Leading population welfare planning, health facility monitoring, and community reproductive health advocacy across Islamabad Capital Territory.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold text-amber-200 font-serif uppercase tracking-wider text-[11px]">
              District Portal Navigation
            </h4>
            <ul className="space-y-1.5 text-slate-400 font-medium">
              <li><button onClick={() => handleTab('about')} className="hover:text-emerald-400 transition-colors text-left">Biographic Profile</button></li>
              <li><button onClick={() => handleTab('portfolio')} className="hover:text-emerald-400 transition-colors text-left">Field Operations & CEWG Logs</button></li>
              <li><button onClick={() => handleTab('skills')} className="hover:text-emerald-400 transition-colors text-left">Core Competencies & KPIs</button></li>
              <li><button onClick={() => handleTab('outlets')} className="hover:text-emerald-400 transition-colors text-left">Supervised Health Facilities</button></li>
              <li><button onClick={() => handleTab('resources')} className="hover:text-emerald-400 transition-colors text-left">Public Policy Downloads</button></li>
            </ul>
          </div>

          {/* Official Contacts */}
          <div className="md:col-span-4 space-y-2 text-xs text-slate-400">
            <h4 className="font-bold text-amber-200 font-serif uppercase tracking-wider text-[11px]">
              District Health Secretariat
            </h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{PROFILE_DATA.officeAddress}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{PROFILE_DATA.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{PROFILE_DATA.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={PROFILE_DATA.dhoIslamabad}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 text-emerald-400 font-medium underline transition-colors flex items-center gap-1"
              >
                <span>District Health Office Islamabad</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 text-sky-400 font-medium underline transition-colors flex items-center gap-1"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Facebook className="w-4 h-4 text-blue-400 shrink-0" />
              <a
                href={PROFILE_DATA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 text-blue-400 font-medium underline transition-colors flex items-center gap-1"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>{t.footerRights}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-800 text-slate-300 hover:text-white transition-all border border-slate-800 flex items-center gap-1 text-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

