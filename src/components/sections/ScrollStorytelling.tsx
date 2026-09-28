import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Plane, FileCheck, Compass, Car, MapPin, Home, ArrowRight, Sparkles } from 'lucide-react';

interface JourneyStage {
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  detail: string;
  serviceLink: string;
}

export const ScrollStorytelling: React.FC = () => {
  const { navigate, openPlanner } = useRouter();
  const [activeStage, setActiveStage] = useState(0);

  const stages: JourneyStage[] = [
    {
      step: '01',
      title: 'Consultation & Flight Reservation',
      subtitle: 'Air Ticketing & Schedule Optimization',
      icon: <Plane className="w-5 h-5 text-sky-500" />,
      detail: 'Optimal airline connections departing from KLIA, Subang, or regional hubs with preferred seat and baggage coordination.',
      serviceLink: '/services/flights',
    },
    {
      step: '02',
      title: 'Documentation & Consular Clearance',
      subtitle: 'Passport & Visa Verification',
      icon: <FileCheck className="w-5 h-5 text-sky-500" />,
      detail: 'Meticulous document checklist preparation, e-Visa submissions, and embassy appointment scheduling for peace of mind.',
      serviceLink: '/services/visa',
    },
    {
      step: '03',
      title: 'Touchdown & Dedicated Transfer',
      subtitle: 'Airport Meet & Chauffeur Mobility',
      icon: <Car className="w-5 h-5 text-sky-500" />,
      detail: 'Punctual airport transfers with clean, air-conditioned MPVs or executive vans waiting at the arrivals terminal.',
      serviceLink: '/services/transfers',
    },
    {
      step: '04',
      title: 'Curated Tours & Local Sightseeing',
      subtitle: 'Hand-Crafted Itineraries & Private Pacing',
      icon: <Compass className="w-5 h-5 text-sky-500" />,
      detail: 'Guided day tours, cultural excursions, or spiritual pilgrimage rituals in Makkah & Madinah with experienced coordinators.',
      serviceLink: '/services/tours',
    },
    {
      step: '05',
      title: 'Memorable Moments & Safe Return',
      subtitle: 'Ongoing Travel Desk Assistance',
      icon: <Home className="w-5 h-5 text-emerald-500" />,
      detail: 'Continuous travel desk availability throughout your trip until your safe arrival back home in Malaysia.',
      serviceLink: '/contact',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Route background path */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>The Complete Travel Arc</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            How Every Journey Unfolds With Us
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            From the moment you consult our Petaling Jaya team to your safe return, every milestone is structured for comfort, security, and simplicity.
          </p>
        </div>

        {/* Airport Transfer Vehicle Animation Component */}
        <div className="mb-14 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-medium">
            <span className="flex items-center gap-1.5 text-sky-400">
              <Car className="w-3.5 h-3.5" />
              Chauffeured Airport Transfer Corridor
            </span>
            <span>KLIA Terminal 1 & 2 ↔ Petaling Jaya & Klang Valley</span>
          </div>

          {/* Road Strip with moving executive transfer van SVG */}
          <div className="relative h-14 bg-slate-900 rounded-xl border border-slate-800 flex items-center overflow-hidden">
            {/* Center dashed road lane */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 border-t border-dashed border-slate-700 w-full" />
            
            {/* Animated Vehicle */}
            <div className="animate-vehicle-move flex items-center gap-2">
              <svg
                viewBox="0 0 100 40"
                className="w-16 h-8 text-sky-400 filter drop-shadow-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Executive MPV Body */}
                <path
                  d="M 5 24 L 15 24 L 25 12 L 68 12 L 85 20 L 95 24 L 95 32 L 5 32 Z"
                  fill="#0284C7"
                />
                {/* Windows */}
                <path
                  d="M 28 15 L 45 15 L 45 22 L 24 22 Z"
                  fill="#E2E8F0"
                  opacity="0.9"
                />
                <path
                  d="M 48 15 L 66 15 L 75 22 L 48 22 Z"
                  fill="#E2E8F0"
                  opacity="0.9"
                />
                {/* Headlights */}
                <circle cx="93" cy="26" r="2" fill="#FDE047" />
                {/* Wheels */}
                <circle cx="22" cy="32" r="5" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
                <circle cx="78" cy="32" r="5" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
              </svg>
              <span className="text-[10px] text-sky-300 font-mono tracking-tight hidden sm:inline">
                Chauffeur En Route
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={stage.step}
                onMouseEnter={() => setActiveStage(idx)}
                onClick={() => setActiveStage(idx)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-sky-400/60 shadow-lg shadow-sky-500/10 -translate-y-1'
                    : 'bg-slate-950/60 border-slate-800/90 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      STAGE {stage.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {stage.icon}
                    </div>
                  </div>

                  <h3 className="font-display text-sm font-bold text-white mb-1">
                    {stage.title}
                  </h3>
                  <div className="text-[11px] text-sky-300 font-medium mb-3">
                    {stage.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {stage.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(stage.serviceLink);
                    }}
                    className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                  >
                    <span>Explore Stage</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => openPlanner()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-md transition-colors cursor-pointer"
          >
            <span>Begin Your Travel Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <style>{`
        @keyframes vehicleMove {
          0% {
            transform: translateX(-80px);
          }
          100% {
            transform: translateX(1100px);
          }
        }
        .animate-vehicle-move {
          animation: vehicleMove 12s linear infinite;
        }
      `}</style>
    </section>
  );
};
