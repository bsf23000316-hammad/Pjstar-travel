import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { VisaProcess } from '../components/sections/VisaProcess';
import { FileCheck, AlertCircle, ArrowRight, CheckCircle2, Shield, Search } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface VisaRequirement {
  country: string;
  flag: string;
  category: string;
  generalRequirements: string[];
  submissionType: 'Electronic (e-Visa / ETA)' | 'Embassy Appointment' | 'Consular Submission';
  typicalCycle: 'Varies by Embassy / Consulate';
}

export const VisaPage: React.FC = () => {
  const { openPlanner } = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const visaList: VisaRequirement[] = [
    {
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      category: 'Umrah / Tourist eVisa',
      generalRequirements: [
        'Passport valid for at least 6 months from entry',
        'Recent digital passport photograph (white background)',
        'Mandatory health insurance policy (included in visa portal)',
        'Confirmed flight and hotel reservation in Makkah / Madinah',
      ],
      submissionType: 'Electronic (e-Visa / ETA)',
      typicalCycle: 'Varies by Embassy / Consulate',
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      category: 'Visitor Visa / ETA (Subclass 601 / 600)',
      generalRequirements: [
        'Biometric passport data page verification',
        'Financial stability proof (bank statement past 3 months)',
        'Employment verification letter or business registration',
        'Travel itinerary outline and accommodation details',
      ],
      submissionType: 'Electronic (e-Visa / ETA)',
      typicalCycle: 'Varies by Embassy / Consulate',
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      category: 'Standard Visitor Visa / ETA Transition',
      generalRequirements: [
        'UK Electronic Travel Authorisation (ETA) registration when applicable',
        'Demonstration of sufficient funds for duration of visit',
        'Proof of accommodation and return travel intention',
      ],
      submissionType: 'Electronic (e-Visa / ETA)',
      typicalCycle: 'Varies by Embassy / Consulate',
    },
    {
      country: 'Schengen European Zone',
      flag: '🇪🇺',
      category: 'Short-Stay Tourist & Business Visa (Type C)',
      generalRequirements: [
        'Fully completed Schengen application form',
        'Minimum €30,000 emergency medical travel insurance',
        'Detailed day-to-day itinerary and confirmed flight bookings',
        'In-person biometrics appointment at designated visa center in KL',
      ],
      submissionType: 'Embassy Appointment',
      typicalCycle: 'Varies by Embassy / Consulate',
    },
    {
      country: 'Japan',
      flag: '🇯🇵',
      category: 'Tourist / Business Travel',
      generalRequirements: [
        'Malaysian biometric ICAO passport (visa-exempt for short stays)',
        'For non-exempt residents: visa application form and photo',
        'Flight itinerary and accommodation verification',
      ],
      submissionType: 'Consular Submission',
      typicalCycle: 'Varies by Embassy / Consulate',
    },
    {
      country: 'China',
      flag: '🇨🇳',
      category: 'Visa Facilitation & Entry Support',
      generalRequirements: [
        'Passport with at least 2 blank pages and 6 months validity',
        'Online application form submission with high-res photo',
        'Consular appointment coordination at China Visa Application Center',
      ],
      submissionType: 'Consular Submission',
      typicalCycle: 'Varies by Embassy / Consulate',
    },
  ];

  const filtered = visaList.filter(v =>
    v.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <FileCheck className="w-4 h-4" />
            <span>Document Preparation & Consular Assistance</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Visa Assistance Center
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            PJ Star Travel provides meticulous document auditing, e-Visa registration support, and embassy appointment coordination for travelers departing from Malaysia.
          </p>
        </div>
      </section>

      {/* 3-Step Process Module */}
      <VisaProcess />

      {/* Search & Requirement Lookup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Destination Document Guidelines
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Review standard consular prerequisites for popular travel corridors.
            </p>
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search destination country..."
              className="w-full pl-10 pr-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.flag}</span>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {item.country}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                    {item.submissionType}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {item.category}
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Key Prerequisites:
                  </span>
                  {item.generalRequirements.map((req, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() =>
                    openPlanner({
                      travelType: 'Visa Assistance',
                      destination: item.country,
                    })
                  }
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span>Request Document Checklist</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
            <strong className="block font-semibold mb-1">Official Consular Compliance Disclaimer:</strong>
            PJ STAR TRAVEL AND TOURS SDN. BHD. acts strictly as a travel facilitation agency. We do not issue visas or guarantee entry clearances, which remain under the sole jurisdiction of respective foreign embassies and sovereign immigration authorities. We assist clients by auditing submissions for completeness and compliance.
          </div>
        </div>
      </section>
    </div>
  );
};
