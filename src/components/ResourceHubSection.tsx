import React, { useState } from 'react';
import { RESOURCE_DOCUMENTS, TRANSLATIONS } from '../data/portfolioData';
import { ResourceDocument, Language } from '../types';
import { FileText, Download, Eye, BookOpen, CheckCircle2, Sparkles, X, ShieldCheck } from 'lucide-react';

interface ResourceHubProps {
  lang: Language;
}

export const ResourceHubSection: React.FC<ResourceHubProps> = ({ lang }) => {
  const [previewDoc, setPreviewDoc] = useState<ResourceDocument | null>(null);
  const [downloadSuccessMsg, setDownloadSuccessMsg] = useState<string | null>(null);
  const t = TRANSLATIONS[lang];

  const handleDownload = (doc: ResourceDocument) => {
    setDownloadSuccessMsg(`Downloading official document: "${doc.title}" (${doc.fileSize})...`);
    setTimeout(() => {
      setDownloadSuccessMsg(null);
    }, 4000);
  };

  return (
    <section id="resources" className="py-16 sm:py-24 px-4 sm:px-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-300 dark:border-emerald-800">
            <BookOpen className="w-4 h-4" />
            <span>Public Knowledge & Policy Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            {t.resourcesTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans">
            {t.resourcesSubtitle}
          </p>
        </div>

        {/* Download Success Banner */}
        {downloadSuccessMsg && (
          <div className="max-w-2xl mx-auto p-4 bg-emerald-600 text-white rounded-2xl shadow-lg flex items-center justify-between gap-3 text-xs sm:text-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{downloadSuccessMsg}</span>
            </div>
            <button onClick={() => setDownloadSuccessMsg(null)}>
              <X className="w-4 h-4 text-emerald-200 hover:text-white" />
            </button>
          </div>
        )}

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESOURCE_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold rounded-lg border border-emerald-200 dark:border-emerald-800">
                    {doc.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {doc.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold font-serif text-slate-900 dark:text-white text-base leading-snug">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold font-sans">
                    {doc.titleUrdu}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  {doc.format} • {doc.fileSize}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPreviewDoc(doc)}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => handleDownload(doc)}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow transition-all flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Document Reader Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                  Official Public Document Reader
                </span>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
                {previewDoc.title}
              </h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                {previewDoc.titleUrdu}
              </p>
            </div>

            {/* Simulated Document Preview Page */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 max-h-60 overflow-y-auto">
              <div className="text-center border-b border-slate-300 dark:border-slate-800 pb-2 font-serif font-bold text-slate-900 dark:text-white">
                GOVERNMENT OF PAKISTAN • ICT ADMINISTRATION<br />
                DISTRICT POPULATION WELFARE OFFICE, ISLAMABAD
              </div>
              <p>
                DOCUMENT REF: PWD/ICT/{previewDoc.id.toUpperCase()}/2025
              </p>
              <p>
                This official publication outlines the strategic operational parameters, clinical monitoring framework, and community outreach guidelines enforced under the jurisdiction of DPWO Mr. Muhammad Ayub across the Islamabad Capital Territory.
              </p>
              <p className="text-[11px] text-slate-500">
                [Full {previewDoc.fileSize} PDF document ready for download]
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Document Format: {previewDoc.format}</span>
              <button
                onClick={() => {
                  handleDownload(previewDoc);
                  setPreviewDoc(null);
                }}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Copy ({previewDoc.fileSize})</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
