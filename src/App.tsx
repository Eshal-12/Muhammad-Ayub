import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillsSection } from './components/SkillsSection';
import { DistrictOutletsSection } from './components/DistrictOutletsSection';
import { ResourceHubSection } from './components/ResourceHubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language, TabType } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden w-full ${lang === 'ur' ? 'lang-ur' : ''}`}>
      
      {/* Header / Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      <main className="min-h-[calc(100vh-250px)] w-full">
        {/* Active Page View */}
        {activeTab === 'home' && <Hero lang={lang} onSelectTab={handleSelectTab} />}
        {activeTab === 'about' && <AboutSection lang={lang} />}
        {activeTab === 'portfolio' && <PortfolioSection lang={lang} />}
        {activeTab === 'skills' && <SkillsSection lang={lang} />}
        {activeTab === 'outlets' && <DistrictOutletsSection lang={lang} />}
        {activeTab === 'resources' && <ResourceHubSection lang={lang} />}
        {activeTab === 'contact' && <ContactSection lang={lang} />}
      </main>

      {/* Footer */}
      <Footer lang={lang} onSelectTab={handleSelectTab} />

    </div>
  );
}

