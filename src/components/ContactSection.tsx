import React, { useState } from 'react';
import { PROFILE_DATA, TRANSLATIONS } from '../data/portfolioData';
import { Language, MeetingRequest } from '../types';
import { MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle2, FileCheck, Printer, ShieldCheck, Linkedin, Facebook, ExternalLink, Search, AlertCircle, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

// Sample tracked requests for demo lookup
const MOCK_TRACKED_REQUESTS: Record<string, { name: string; org: string; purpose: string; date: string; status: string; desk: string; submittedOn: string }> = {
  'ICT-DPWO-782104': {
    name: 'Dr. Tariq Mahmood',
    org: 'Ministry of National Health Services',
    purpose: 'CEWG Strategic Partnership Meeting',
    date: '2026-08-05',
    status: 'Meeting Confirmed by Secretariat',
    desk: 'DPWO Personal Secretariat, Sector G-11/4',
    submittedOn: '24/07/2026',
  },
  'ICT-DPWO-593021': {
    name: 'Mrs. Samina Parveen',
    org: 'District Health NGO Representative',
    purpose: 'Community Welfare Collaboration',
    date: '2026-08-10',
    status: 'Under Active Review by DPWO Desk',
    desk: 'Planning & Operations Wing, ICT',
    submittedOn: '25/07/2026',
  },
};

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'track' | 'feedback'>('schedule');

  const [formData, setFormData] = useState<MeetingRequest>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    purpose: 'Official Meeting Request',
    preferredDate: '',
    message: '',
  });

  const [feedbackData, setFeedbackData] = useState({
    name: '',
    phone: '',
    sector: 'G-11',
    feedbackType: 'Facility Service Feedback',
    comments: '',
  });

  const [submittedSlip, setSubmittedSlip] = useState<MeetingRequest | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Status tracking search state
  const [trackingIdInput, setTrackingIdInput] = useState('');
  const [trackedResult, setTrackedResult] = useState<typeof MOCK_TRACKED_REQUESTS[string] | null | 'NOT_FOUND'>(null);

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

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = trackingIdInput.trim().toUpperCase();
    if (!cleanId) return;

    if (MOCK_TRACKED_REQUESTS[cleanId]) {
      setTrackedResult(MOCK_TRACKED_REQUESTS[cleanId]);
    } else if (cleanId.startsWith('ICT-DPWO-')) {
      setTrackedResult({
        name: 'Official Citizen Applicant',
        org: 'Islamabad Capital Territory Resident',
        purpose: 'Inquiry / Meeting Request',
        date: 'Scheduled within 3 Working Days',
        status: 'Received & Logged in DPWO Dispatch Register',
        desk: 'Public Relations Desk, DPWO Office ICT',
        submittedOn: 'Recently Submitted',
      });
    } else {
      setTrackedResult('NOT_FOUND');
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackData({ name: '', phone: '', sector: 'G-11', feedbackType: 'Facility Service Feedback', comments: '' });
    }, 4000);
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

          {/* Tabbed Interactive Panel (Right Column) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Sub-Navigation Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold">
              <button
                onClick={() => setActiveTab('schedule')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'schedule'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Meeting</span>
              </button>

              <button
                onClick={() => setActiveTab('track')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'track'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Track Request Status</span>
              </button>

              <button
                onClick={() => setActiveTab('feedback')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'feedback'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Citizen Desk</span>
              </button>
            </div>

            {/* TAB 1: SCHEDULE MEETING */}
            {activeTab === 'schedule' && (
              <>
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
              </>
            )}

            {/* TAB 2: TRACK REQUEST STATUS */}
            {activeTab === 'track' && (
              <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                    <Search className="w-5 h-5 text-emerald-600" />
                    <span>Official Dispatch & Request Tracker</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Enter your reference ID (e.g. ICT-DPWO-782104) to check live processing status.
                  </p>
                </div>

                <form onSubmit={handleTrackSearch} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    required
                    value={trackingIdInput}
                    onChange={(e) => setTrackingIdInput(e.target.value)}
                    placeholder="Enter Reference ID e.g. ICT-DPWO-782104"
                    className="flex-1 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-mono focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow shrink-0 flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Track Request</span>
                  </button>
                </form>

                {/* Sample IDs Quick Fill */}
                <div className="text-xs text-slate-500 space-y-1">
                  <span className="font-semibold block text-slate-700 dark:text-slate-300">Try Sample Demo IDs:</span>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(MOCK_TRACKED_REQUESTS).map((id) => (
                      <button
                        key={id}
                        onClick={() => {
                          setTrackingIdInput(id);
                          setTrackedResult(MOCK_TRACKED_REQUESTS[id]);
                        }}
                        className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-[11px] font-mono hover:border-emerald-500 transition-colors text-slate-700 dark:text-slate-300"
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tracked Result View */}
                {trackedResult && trackedResult !== 'NOT_FOUND' && (
                  <div className="p-5 bg-white dark:bg-slate-800 border-2 border-emerald-500 rounded-2xl space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                      <span className="text-xs font-bold text-slate-500">REQUEST STATUS</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-black rounded-full border border-emerald-300">
                        {trackedResult.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                      <div>
                        <span className="text-slate-400 block text-[10px] font-mono">APPLICANT</span>
                        <span className="font-bold text-slate-900 dark:text-white">{trackedResult.name}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] font-mono">ORGANIZATION</span>
                        <span className="font-bold text-slate-900 dark:text-white">{trackedResult.org}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] font-mono">PURPOSE</span>
                        <span className="font-bold text-slate-900 dark:text-white">{trackedResult.purpose}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] font-mono">ASSIGNED DESK</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">{trackedResult.desk}</span>
                      </div>
                    </div>
                  </div>
                )}

                {trackedResult === 'NOT_FOUND' && (
                  <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-2xl text-xs text-rose-800 dark:text-rose-300 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>No dispatch entry found for this ID. Please double-check your Reference Number or submit a new inquiry.</span>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: CITIZEN FEEDBACK DESK */}
            {activeTab === 'feedback' && (
              <form onSubmit={handleFeedbackSubmit} className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                    <span>Citizen Public Grievance & Service Portal</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Compliant with ICT Population Welfare Department public service standards.
                  </p>
                </div>

                {feedbackSubmitted ? (
                  <div className="p-5 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-400 text-emerald-900 dark:text-emerald-200 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span>Your feedback has been logged directly into the District Public Relations Register. Thank you for helping improve ICT health services!</span>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <label className="font-bold text-slate-700 dark:text-slate-200">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={feedbackData.name}
                          onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                          placeholder="Citizen / Community Member Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-700 dark:text-slate-200">Contact Number</label>
                        <input
                          type="tel"
                          required
                          value={feedbackData.phone}
                          onChange={(e) => setFeedbackData({ ...feedbackData, phone: e.target.value })}
                          placeholder="e.g. 0300 1234567"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <label className="font-bold text-slate-700 dark:text-slate-200">Inquiry / Feedback Category</label>
                      <select
                        value={feedbackData.feedbackType}
                        onChange={(e) => setFeedbackData({ ...feedbackData, feedbackType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      >
                        <option value="Facility Service Feedback">Family Welfare Center Service Feedback</option>
                        <option value="Mobile Medical Unit Inquiry">Mobile Health Unit Visit Schedule Request</option>
                        <option value="Pre-marital Counseling Inquiry">Pre-marital Counseling & Guidance</option>
                        <option value="IEC Literature Request">IEC Informational Literature Request</option>
                      </select>
                    </div>

                    <div className="space-y-1 text-xs">
                      <label className="font-bold text-slate-700 dark:text-slate-200">Feedback Details / Comments</label>
                      <textarea
                        required
                        rows={3}
                        value={feedbackData.comments}
                        onChange={(e) => setFeedbackData({ ...feedbackData, comments: e.target.value })}
                        placeholder="Write your comments, appreciation, or facility service feedback..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Citizen Feedback</span>
                    </button>
                  </>
                )}
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
