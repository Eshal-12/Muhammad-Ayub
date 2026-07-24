import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, TRANSLATIONS } from '../data/portfolioData';
import { PortfolioCategory, PortfolioItem, Language } from '../types';
import { Search, Calendar, MapPin, Tag, CheckCircle2, X, ExternalLink, Sparkles, Filter, ChevronRight } from 'lucide-react';

interface PortfolioSectionProps {
  lang: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const t = TRANSLATIONS[lang];

  const categories: PortfolioCategory[] = [
    'All',
    'Field Monitoring',
    'Training & Seminars',
    'Country Engagement Working Group (CEWG)',
    'Inland Events',
    'Foreign Visits',
  ];

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PORTFOLIO_ITEMS.length };
    PORTFOLIO_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.date.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-300 dark:border-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Documented Field & Event Logs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            {t.portfolioTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans">
            {t.portfolioSubtitle}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4">
          
          {/* Live Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-11 pr-10 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl text-base sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold bg-slate-200 dark:bg-slate-800 p-1 rounded-full"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Tabs (Horizontal Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 w-full max-w-full sm:flex-wrap sm:justify-center no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-2 border min-h-[40px] ${
                    isActive
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 space-y-3">
            <Filter className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">No portfolio events found</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No matching field inspections or events found for your search query. Try clearing filters or searching for another facility name.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-500 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
              >
                {/* Image Box */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-emerald-950/80 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md border border-emerald-700/60 shadow-sm flex items-center gap-1">
                    <Tag className="w-3 h-3 text-emerald-400" />
                    <span>{item.category}</span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/85 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md border border-slate-700/80 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold font-serif text-slate-900 dark:text-white text-base leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-xs line-clamp-3 leading-relaxed font-sans pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                      DPWO Field Document
                    </span>
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-600 hover:text-white text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-lg border border-emerald-200 dark:border-emerald-800 transition-all flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Portfolio Item Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-md">
                  {activeModalItem.category}
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {activeModalItem.date}
                </span>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Event Cover Image */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800">
                <img
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Event Title & Location */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-white">
                  {activeModalItem.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <MapPin className="w-4 h-4" />
                  <span>{activeModalItem.location}</span>
                </div>
              </div>

              {/* Event Full Narrative */}
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Official Field Summary
                </h4>
                <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed font-sans">
                  {activeModalItem.fullNarrative || activeModalItem.description}
                </p>
              </div>

              {/* Key Outcomes / Action Items Checklist */}
              {activeModalItem.outcomes && activeModalItem.outcomes.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Key Outcomes & Directives Issued</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {activeModalItem.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-slate-800 dark:text-emerald-200 flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer / Officer Verification Stamp */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Verified by DPWO Office ICT</span>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2 bg-slate-900 text-white dark:bg-slate-800 font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Close Document
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
