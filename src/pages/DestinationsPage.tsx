import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { DESTINATIONS } from '../data/destinations';
import { MapPin, Clock, ArrowRight, Sparkles, Filter } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  const { openPlanner } = useRouter();
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = [
    'All',
    'Domestic (Malaysia)',
    'Southeast Asia',
    'Middle East',
    'East Asia',
  ];

  const filtered = selectedRegion === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === selectedRegion);

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              <MapPin className="w-4 h-4" />
              <span>International & Domestic Discovery</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Curated Destinations
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore premier global and regional destinations coordinated by PJ Star Travel from Petaling Jaya.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto max-w-full">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase with Hover Zoom */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

                  {/* Clean unboxed text metadata on overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold text-sky-300">
                      {dest.category}
                    </span>
                    <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span>{dest.flightDurationFromKL}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white leading-snug">
                      {dest.name}
                    </h3>
                    <div className="text-xs text-sky-200 font-medium">
                      {dest.country}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {dest.shortDescription}
                  </p>

                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Featured Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {dest.popularHighlights.map((h, idx) => (
                        <span key={idx} className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Best Time:</span>
                    <strong className="text-slate-700 dark:text-slate-200">{dest.bestTimeToVisit}</strong>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() =>
                    openPlanner({
                      destination: `${dest.name}, ${dest.country}`,
                      travelType: dest.category === 'Spiritual Pilgrimage' ? 'Umrah' : 'Tours & Holidays',
                    })
                  }
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
                >
                  <span>Inquire Travel to {dest.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
