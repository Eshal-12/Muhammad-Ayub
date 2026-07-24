import React, { useState } from 'react';
import { PROFILE_DATA, TRANSLATIONS } from '../data/portfolioData';
import { Language, MeetingRequest } from '../types';
import { MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle2, FileCheck, Printer, ShieldCheck, Sparkles, Linkedin, Facebook, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState<MeetingRequest>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    purpose: 'Official Meeting Request',
    preferredDate: '',
    message: '',
  });

  const [submittedSlip, setSubmittedSlip] = useState<MeetingRequest | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refId = `ICT-DPWO-${Math.floor(100000 + Math.random() * 900000)}`;
      const submissionDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      const finalData: MeetingRequest = {
        ...formData,
        referenceId: refId,
        submittedAt: submissionDate,
      };

      setSubmittedSlip(finalData);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-300 dark:border-emerald-800">
            <Mail className="w-4 h-4" />
            <span>Official Engagement Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Office Contact Info (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-serif text-lg text-amber-100">
                    District Secretariat Office
                  </h3>
                  <p className="text-xs text-emerald-300">Islamabad Capital Territory Administration</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Office Address:</span>
                    <span className="text-slate-400 leading-relaxed">{PROFILE_DATA.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Telephone Helpdesk:</span>
                    <span className="text-slate-400">{PROFILE_DATA.phone} / {PROFILE_DATA.altPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Official Dispatch Email:</span>
                    <span className="text-slate-400">{PROFILE_DATA.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">LinkedIn Profile:</span>
                    <a
                      href={PROFILE_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 transition-colors mt-0.5"
                    >
                      <span>Muhammad Ayub on LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Facebook className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Facebook Page:</span>
                    <a
                      href={PROFILE_DATA.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 transition-colors mt-0.5"
                    >
                      <span>Muhammad Ayub on Facebook</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Official Visitor Timings:</span>
                    <span className="text-slate-400">Monday – Friday: 08:30 AM – 03:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Notice Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700/60 text-xs text-emerald-200 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-1">Public Access Notice:</span>
                All official delegations and public welfare inquiries are received with prior reference logging. Please use the meeting scheduler form to obtain a tracking reference ID.
              </div>
            </div>

            {/* Map Frame Card */}
            <div className="bg-slate-100 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-bold block text-slate-900 dark:text-white">Located in Sector G-11/4</span>
                <span>Near DHO Complex & ICT Courts, Islamabad</span>
              </div>
              <a
                href="https://maps.google.com/?q=District+Health+Office+G-11/4+Islamabad"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shrink-0"
              >
                Open Maps
              </a>
            </div>

          </div>

          {/* Form & Confirmation Slip (Right Column) */}
          <div className="lg:col-span-7">
            {submittedSlip ? (
              /* Printable Confirmation Slip */
              <div className="bg-emerald-50/80 dark:bg-slate-900 border-2 border-emerald-500 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-in zoom-in-95 duration-300">
                
                <div className="text-center space-y-2 border-b border-emerald-200 dark:border-slate-800 pb-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white">
                    Official Reference Slip Generated
                  </h3>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold">
                    District Population Welfare Office, Islamabad Capital Territory
                  </p>
                </div>

                {/* Reference Card Box */}
                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-emerald-200 dark:border-slate-700 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
                    <span className="text-slate-500">Tracking Ref ID:</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">{submittedSlip.referenceId}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-200">
                    <div>
                      <span className="text-slate-400 block text-[10px]">APPLICANT NAME:</span>
                      <span className="font-bold">{submittedSlip.fullName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">ORGANIZATION:</span>
                      <span className="font-bold">{submittedSlip.organization || 'Individual Public Member'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">PURPOSE:</span>
                      <span className="font-bold">{submittedSlip.purpose}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">REQUESTED DATE:</span>
                      <span className="font-bold">{submittedSlip.preferredDate || 'Earliest Slot'}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700 text-[11px] text-slate-500">
                    SUBMITTED ON: {submittedSlip.submittedAt}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Reference Slip</span>
                  </button>

                  <button
                    onClick={() => setSubmittedSlip(null)}
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>

              </div>
            ) : (
              /* Official Meeting Request Form */
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-emerald-600" />
                    <span>Official Schedule & Inquiry Form</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct entry into the District Population Welfare Officer's scheduling portal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Tariq Mahmood"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      {t.formOrg}
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Marie Stopes / Ministry of Health"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      {t.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. officer@organization.org"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      {t.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +92 300 1234567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Purpose */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      {t.formPurpose}
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Official Meeting Request">Official Meeting Request</option>
                      <option value="Community Welfare Collaboration">Community Welfare Collaboration</option>
                      <option value="CEWG Strategic Partnership">CEWG Strategic Partnership</option>
                      <option value="Health Facility Monitoring Feedback">Health Facility Monitoring Feedback</option>
                      <option value="IEC Literature Requisition">IEC Literature Requisition</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      {t.formDate}
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <label className="font-bold text-slate-700 dark:text-slate-200">
                    {t.formMsg} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details of your inquiry, proposed agenda, or facility feedback..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 min-h-[48px]"
                >
                  {isSubmitting ? (
                    <span>Generating Reference ID...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.btnSubmitForm}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
