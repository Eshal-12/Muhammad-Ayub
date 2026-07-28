import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ShieldCheck, MapPin, MessageSquare } from 'lucide-react';
import { PROFILE_DATA, TRANSLATIONS } from '../data/portfolioData';
import { Language, TabType } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  activeTab,
  onSelectTab,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: TabType; label: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'skills', label: t.navSkills },
    { id: 'outlets', label: t.navOutlets },
    { id: 'resources', label: t.navResources },
    { id: 'contact', label: t.navContact },
  ];

  const handleTabClick = (tabId: TabType) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full font-sans sticky top-0 z-40 transition-all duration-300">
      {/* Top Govt Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-800/50 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-800 text-emerald-200 text-[10px] font-bold">
            🇵🇰
          </span>
          <span>{t.govHeader}</span>
          <span className="hidden md:inline-block text-emerald-600">•</span>
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-300">
            <MapPin className="w-3 h-3" /> ICT Secretariat, Islamabad
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-xs">
          <a href={`tel:${PROFILE_DATA.phone.replace(/[^0-9+]/g, '')}`} className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>{PROFILE_DATA.phone}</span>
          </a>
          <a
            href={PROFILE_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-emerald-200 hover:text-white transition-all font-semibold border border-emerald-600/50"
          >
            <MessageSquare className="w-3 h-3 text-emerald-300" />
            <span>WhatsApp: {PROFILE_DATA.whatsapp}</span>
          </a>
          <a href={`mailto:${PROFILE_DATA.email}`} className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3 h-3 text-emerald-400" />
            <span>{PROFILE_DATA.email}</span>
          </a>

          {/* Language Toggle */}
          <div className="flex items-center bg-emerald-900/80 rounded-lg p-0.5 border border-emerald-700/60">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 text-[11px] rounded font-semibold transition-all ${
                lang === 'en'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ur')}
              className={`px-2 py-0.5 text-[11px] rounded font-semibold transition-all ${
                lang === 'ur'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              اردو
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full px-4 sm:px-8 py-3 transition-all ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-emerald-100 dark:border-slate-800'
            : 'bg-gradient-to-b from-emerald-900 via-emerald-900/90 to-emerald-950 text-white shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Title */}
          <button onClick={() => handleTabClick('home')} className="flex items-center gap-2.5 sm:gap-3 group text-left max-w-[75%] sm:max-w-none">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.vozecEsIi9YU09ocNhf4bAHaHS?pid=Api&P=0&h=220"
              alt="DPWO Logo"
              referrerPolicy="no-referrer"
              className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 object-contain rounded-xl bg-white p-0.5 shadow-md transition-transform group-hover:scale-105 border border-emerald-200 dark:border-emerald-800"
            />
            <div className="min-w-0">
              <div className={`font-bold text-sm sm:text-base lg:text-lg leading-tight tracking-tight truncate ${
                isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
              }`}>
                MUHAMMAD AYUB
              </div>
              <div className={`text-[10px] sm:text-xs font-medium flex items-center gap-1 truncate ${
                isScrolled ? 'text-emerald-700 dark:text-emerald-400' : 'text-emerald-200'
              }`}>
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">DPWO Islamabad Capital Territory</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                      : isScrolled
                      ? 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-slate-800'
                      : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-emerald-800/40 bg-emerald-950 text-white rounded-2xl p-4 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  className={`w-full text-left px-4 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow'
                      : 'hover:bg-emerald-900 active:bg-emerald-800 text-emerald-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-slate-950" />}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

