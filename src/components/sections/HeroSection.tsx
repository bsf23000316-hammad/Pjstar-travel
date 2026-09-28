import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { AirplaneAnimation } from '../animations/AirplaneAnimation';
import { ArrowRight, MessageCircle, MapPin, ShieldCheck, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const HeroSection: React.FC = () => {
  const { navigate, openPlanner } = useRouter();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Cinematic Image with measured gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_travel_journey_1790599683575.jpg"
          alt="Cinematic international travel vista"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-pulse-slow"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured scrim to guarantee 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      {/* Airplane Moving Animation Layer */}
      <div className="absolute top-1/4 right-4 sm:right-12 lg:right-24 z-10 hidden sm:block">
        <AirplaneAnimation />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 w-full">
        <div className="max-w-2xl">
          
          {/* Clean Unboxed Metadata Kicker (Anti-slop compliant) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Petaling Jaya, Selangor
            </span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Malaysian Travel Agency</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Est. Registered</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance mb-6">
            Your Journey <br />
            <span className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
              Starts Here.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal mb-8 max-w-xl">
            Flights, visas, tours, transfers and unforgettable experiences — all coordinated with personal care from Petaling Jaya, Selangor.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={() => {
                const servicesElem = document.getElementById('services-section');
                if (servicesElem) {
                  servicesElem.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/services');
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Explore Travel Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm backdrop-blur-sm transition-all duration-200 hover:border-white/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Talk to a Travel Expert</span>
            </a>
          </div>

          {/* Factual Value Props */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-slate-300">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Flight Booking</div>
              <div className="text-sm font-bold text-white mt-0.5">Air Ticketing</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Consular Support</div>
              <div className="text-sm font-bold text-white mt-0.5">Visa Assistance</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Custom Itineraries</div>
              <div className="text-sm font-bold text-white mt-0.5">Tours & Umrah</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
