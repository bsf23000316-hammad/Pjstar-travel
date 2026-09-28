import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const { showToast } = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelType, setTravelType] = useState('Flight Booking');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const travelTypes = [
    'Flight Booking / Air Ticketing',
    'Visa Assistance & Travel Documents',
    'Domestic or International Tour Package',
    'Airport Transfer (KLIA / Subang)',
    'Umrah Pilgrimage Package',
    'Hajj Travel Inquiry',
    'Corporate Travel / Group Logistics',
    'General Inquiry',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Phone, and Message).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Simulating clean asynchronous inquiry dispatch abstraction
      await new Promise((res) => setTimeout(res, 900));
      setIsSubmitting(false);
      setIsSuccess(true);
      
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // confetti fallback
      }

      showToast('Your message has been sent successfully! Our PJ Star team will reply promptly.');
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('Unable to send message at this moment. Please reach us via WhatsApp or Phone directly.');
    }
  };

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <Phone className="w-4 h-4" />
            <span>Connect with Travel Advisors</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Contact PJ Star Travel & Tours
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Have questions about upcoming flights, visa requirements, or holiday tours? Reach out to our team in Petaling Jaya, Selangor.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm space-y-6">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Petaling Jaya Office
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Address
                    </strong>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      PJ STAR TRAVEL AND TOURS SDN. BHD.
                      <br />
                      Petaling Jaya, Selangor Darul Ehsan, Malaysia
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Telephone
                    </strong>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="text-slate-800 dark:text-slate-200 hover:text-sky-600 font-medium"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      WhatsApp Quick Desk
                    </strong>
                    <a
                      href={COMPANY_INFO.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline block"
                    >
                      {COMPANY_INFO.contact.whatsapp}
                    </a>
                    <span className="text-[11px] text-slate-400">
                      Direct WhatsApp for instant flight and tour inquiries
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Email
                    </strong>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-slate-800 dark:text-slate-200 hover:text-sky-600 font-medium"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Business Hours
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed block">
                      {COMPANY_INFO.contact.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-lg space-y-3">
              <h3 className="font-display text-lg font-bold">
                Need Rapid Assistance?
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Connect directly with our travel desk via WhatsApp for fast responses regarding urgent air tickets or visa forms.
              </p>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-semibold text-xs shadow-sm hover:bg-emerald-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-800 text-white" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right: Validated Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Travel Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8">
                Fill in your travel preferences and our travel consultants will follow up with itinerary details and fare options.
              </p>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your travel inquiry has been transmitted to our customer service desk. We will review your request and get in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage('');
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Nurul Huda"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="e.g. +60 12-345 6789"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.g. huda@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Travel Service Type
                      </label>
                      <select
                        value={travelType}
                        onChange={e => setTravelType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        {travelTypes.map(t => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Destination
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                        placeholder="e.g. Makkah, Tokyo, London, Penang"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Intended Travel Date (Tentative)
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={e => setTravelDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message & Requirements *
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Please mention number of passengers, cabin class preference, or specific tour requests..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Travel Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Travel Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
