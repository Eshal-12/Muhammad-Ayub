import React, { useState } from 'react';
import { PROFILE_DATA, TRANSLATIONS } from '../data/portfolioData';
import { Language } from '../types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Linkedin, Facebook, ExternalLink, MessageSquare, FileText } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    fullName: string;
    subject: string;
    submittedAt: string;
    whatsappUrl: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refId = `DPWO-MSG-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionDate = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const formattedMessage = `*Official Inquiry to DPWO Islamabad Office*
*Ref ID:* ${refId}
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ''}${formData.organization ? `*Org/Dept:* ${formData.organization}\n` : ''}*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    const whatsappTargetUrl = `https://wa.me/923331532153?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      // Redirect to WhatsApp
      window.open(whatsappTargetUrl, '_blank');

      setSubmittedData({
        referenceId: refId,
        fullName: formData.fullName,
        subject: formData.subject,
        submittedAt: submissionDate,
        whatsappUrl: whatsappTargetUrl,
      });

      setIsSubmitting(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        organization: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-300 dark:border-emerald-800">
            <Mail className="w-4 h-4" />
            <span>Official Access & Inquiry Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            Contact District Population Welfare Office
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans">
            Direct communication portal to reach the DPWO Secretariat, ICT Islamabad.
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
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Official WhatsApp Helpline:</span>
                    <a
                      href={PROFILE_DATA.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 transition-colors mt-0.5"
                    >
                      <span>{PROFILE_DATA.whatsapp} (Click to Chat)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Official Email:</span>
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
                    <span className="font-bold text-slate-200 block">Official Office Hours:</span>
                    <span className="text-slate-400">Monday – Friday: 08:30 AM – 03:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Notice Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700/60 text-xs text-emerald-200 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-1">Public Access Notice:</span>
                Direct inquiries and official communications are received and reviewed by the Secretariat of District Population Welfare Officer, ICT Islamabad.
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

          {/* Direct Access Form (Right Column) */}
          <div className="lg:col-span-7">
            {submittedData ? (
              <div className="bg-emerald-50 dark:bg-slate-900 border-2 border-emerald-500 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-in zoom-in-95 duration-200">
                <div className="text-center space-y-2 border-b border-emerald-200 dark:border-slate-800 pb-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white">
                    Opening WhatsApp to Send Message
                  </h3>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold">
                    District Population Welfare Office (+92 333 1532153)
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-emerald-200 dark:border-slate-700 space-y-3 text-xs">
                  <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2 font-mono">
                    <span className="text-slate-500">Reference No:</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">{submittedData.referenceId}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-200">
                    <div>
                      <span className="text-slate-400 block text-[10px]">SENDER:</span>
                      <span className="font-bold">{submittedData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">SUBJECT:</span>
                      <span className="font-bold">{submittedData.subject}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700 text-[11px] text-slate-500">
                    LOGGED ON: {submittedData.submittedAt}
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat (+92 333 1532153)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSubmittedData(null)}
                    className="w-full py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <span>Official Direct Inquiry Form</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill in your details below to communicate directly with the DPWO Secretariat office.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ali Ahmed"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      Mobile / Contact No *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0300 1234567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Organization / Status */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-200">
                      Organization / Dept (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Ministry / NGO / Resident"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Purpose / Subject */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <label className="font-bold text-slate-700 dark:text-slate-200">
                    Subject / Purpose
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="General Inquiry">General Public Inquiry</option>
                    <option value="Departmental Coordination">Departmental Coordination</option>
                    <option value="Family Welfare Facility Inquiry">Family Welfare Facility / Outlet Inquiry</option>
                    <option value="Official Access / Appointment">Official Access / Meeting Request</option>
                    <option value="Community / NGO Collaboration">Community / NGO Collaboration</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <label className="font-bold text-slate-700 dark:text-slate-200">
                    Your Message / Inquiry Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message, inquiry, or purpose of contacting DPWO..."
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
                    <span>Opening WhatsApp (+92 333 1532153)...</span>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      <span>Send Message to DPWO (WhatsApp)</span>
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

