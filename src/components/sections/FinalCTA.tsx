import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, MessageCircle, Plane, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const FinalCTA: React.FC = () => {
  const { openPlanner } = useRouter();

  return (
    <section className="relative py-28 sm:py-36 bg-slate-950 text-white overflow-hidden">
      {/* Background cinematic image with deep gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_travel_journey_1790599683575.jpg"
          alt="International travel landscape"
          className="w-full h-full object-cover object-center scale-105 opacity-40 filter brightness-75"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90" />
      </div>

      {/* Animated route arc SVG in background */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-30">
        <svg className="w-full max-w-5xl h-64" viewBox="0 0 1000 300" fill="none">
          <path
            d="M 50 250 Q 500 20 950 200"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
        </svg>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-300 mb-6 backdrop-blur-md">
          <Plane className="w-3.5 h-3.5 -rotate-45" />
          <span>PJ Star Travel & Tours · Petaling Jaya, Selangor</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
          Where Will You Go Next?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Let’s make your next journey simple. From flight tickets and visa guidance to customized tours and Umrah pilgrimage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => openPlanner()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-xl shadow-sky-500/30 transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Plan Your Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={COMPANY_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm backdrop-blur-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Talk to a Travel Expert</span>
          </a>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>Domestic & International Air Ticketing</span>
          <span aria-hidden="true">·</span>
          <span>Visa Preparation & Auditing</span>
          <span aria-hidden="true">·</span>
          <span>Airport Transfers (KLIA / Subang)</span>
          <span aria-hidden="true">·</span>
          <span>Umrah & Hajj Pilgrimage</span>
        </div>

      </div>
    </section>
  );
};
