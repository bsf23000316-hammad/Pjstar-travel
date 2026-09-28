import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ShieldCheck, MapPin, Award, HeartHandshake, Plane, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const AboutPage: React.FC = () => {
  const { navigate, openPlanner } = useRouter();

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Company Introduction</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            About PJ Star Travel & Tours
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            PJ STAR TRAVEL AND TOURS SDN. BHD. is an established Malaysian travel agency operating from Petaling Jaya, Selangor. We deliver personal, dependable travel coordination for domestic and international journeys.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Our Travel Philosophy
          </h2>
          <p>
            We believe that travel should be seamless, transparent, and enriching from the very first step of planning. Whether a family holiday, corporate delegation, or sacred Umrah pilgrimage, our team takes pride in handling the logistics so you can focus on the experience.
          </p>
          <p>
            Unlike automated self-service portals where travelers often face automated phone trees during flight disruptions, PJ Star Travel pairs modern booking systems with attentive human travel consultants based in Petaling Jaya.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                Transparent Advisory
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Clear itinerary inclusions, baggage policies, and fare breakdowns with zero concealed costs.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                Local Presence
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Accessible travel desk in Selangor offering direct phone, WhatsApp, and in-person consultations.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
            <img
              src="/src/assets/images/destination_malaysia_kl_1790599716466.jpg"
              alt="Petaling Jaya and Kuala Lumpur skyline"
              className="w-full h-80 sm:h-96 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Petaling Jaya, Selangor, Malaysia</span>
              </div>
              <div className="text-sm font-bold mt-1">
                PJ STAR TRAVEL AND TOURS SDN. BHD.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Core Principles */}
      <section className="bg-slate-50 dark:bg-slate-950/60 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Our Professional Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              The operational commitments that guide every travel arrangement we handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-sky-500 mb-4 font-bold">
                01
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2">
                Documentary Precision
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Prior to applying for visas or issuing non-refundable airline tickets, our staff conducts multi-point checks to minimize rejection risks.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-sky-500 mb-4 font-bold">
                02
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2">
                Punctual Ground Transit
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                From KLIA arrival pickups to intercity transfers, we coordinate with vetted licensed transport partners to ensure on-time departures.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-sky-500 mb-4 font-bold">
                03
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2">
                Devoted Pilgrimage Care
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Umrah and Hajj packages prioritize pilgrim wellbeing, accessibility for elderly family members, and adherence to authentic religious rites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Ready to Start Planning Your Journey?
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-6">
          Reach out to our Petaling Jaya travel team for custom flight quotes, visa assistance, and holiday packages.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => openPlanner()}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Plan Your Journey
          </button>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Contact Petaling Jaya Office
          </button>
        </div>
      </section>
    </div>
  );
};
