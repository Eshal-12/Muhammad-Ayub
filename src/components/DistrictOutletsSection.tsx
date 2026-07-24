import React, { useState } from 'react';
import { DISTRICT_FACILITIES, TRANSLATIONS } from '../data/portfolioData';
import { DistrictFacility, Language } from '../types';
import { Building2, MapPin, Phone, Clock, ShieldCheck, CheckCircle2, Hospital, Sparkles, Navigation } from 'lucide-react';

interface DistrictOutletsProps {
  lang: Language;
}

export const DistrictOutletsSection: React.FC<DistrictOutletsProps> = ({ lang }) => {
  const [selectedFacility, setSelectedFacility] = useState<DistrictFacility | null>(DISTRICT_FACILITIES[0]);
  const t = TRANSLATIONS[lang];

  const handleFacilitySelect = (fac: DistrictFacility) => {
    setSelectedFacility(fac);
    if (window.innerWidth < 1024) {
      const detailElement = document.getElementById('facility-detail-panel');
      if (detailElement) {
        detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="outlets" className="py-16 sm:py-24 px-4 sm:px-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-300 dark:border-emerald-800">
            <Hospital className="w-4 h-4" />
            <span>District Health Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            {t.outletsTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans">
            {t.outletsSubtitle}
          </p>
        </div>

        {/* Directory Layout: List + Focus Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Facilities List (Left Column) */}
          <div className="lg:col-span-5 space-y-3 max-h-[500px] sm:max-h-[600px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
            {DISTRICT_FACILITIES.map((fac) => {
              const isSelected = selectedFacility?.id === fac.id;
              return (
                <div
                  key={fac.id}
                  onClick={() => handleFacilitySelect(fac)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-700 shadow-md ring-2 ring-emerald-500/30'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800 hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                          isSelected
                            ? 'bg-emerald-800 text-amber-300 border border-emerald-600'
                            : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                        }`}
                      >
                        {fac.type}
                      </span>
                      <h4 className="font-bold font-serif text-sm sm:text-base leading-snug">
                        {fac.name}
                      </h4>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                        isSelected
                          ? 'bg-emerald-950 text-emerald-200 border border-emerald-700'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {fac.status}
                    </span>
                  </div>

                  <div className={`mt-2 flex items-center justify-between text-xs ${isSelected ? 'text-emerald-200' : 'text-slate-500 dark:text-slate-400'}`}>
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{fac.location}</span>
                    </div>
                    <span className="lg:hidden text-[10px] font-semibold text-amber-400 underline shrink-0 ml-2">Tap to View</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Facility View (Right Column) */}
          <div id="facility-detail-panel" className="lg:col-span-7 scroll-mt-24">
            {selectedFacility ? (
              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-lg space-y-6">
                
                {/* Header */}
                <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg shadow-sm">
                      {selectedFacility.type}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Inspected: {selectedFacility.lastInspected || 'Recently Reviewed'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white">
                    {selectedFacility.name}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      {selectedFacility.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                      {selectedFacility.timing}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-teal-600" />
                      {selectedFacility.phone}
                    </span>
                  </div>
                </div>

                {/* Available Health Services */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Supervised Clinical & Community Services</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedFacility.services.map((srv, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-xs"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Islamabad Map Pin Card */}
                <div className="p-5 bg-gradient-to-r from-emerald-950 to-slate-900 text-white rounded-2xl border border-emerald-800/80 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h5 className="font-serif font-bold text-sm text-amber-200 flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-amber-400" />
                      <span>District Jurisdiction Map</span>
                    </h5>
                    <p className="text-xs text-emerald-200">
                      Islamabad Capital Territory Health Network • DHO ICT Coordination
                    </p>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(selectedFacility.name + ' ' + selectedFacility.location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow transition-all shrink-0 flex items-center gap-1.5"
                  >
                    <span>View Map</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
                Select a facility from the left directory to view full operational details.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
