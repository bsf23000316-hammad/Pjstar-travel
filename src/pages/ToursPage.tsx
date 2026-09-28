import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { TOURS_DATA } from '../data/tours';
import { Clock, MapPin, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const ToursPage: React.FC = () => {
  const { openPlanner } = useRouter();
  const [selectedType, setSelectedType] = useState<string>('All');

  const tourTypes = ['All', 'Day Sightseeing', 'Private Tour', 'Spiritual', 'Group Tour', 'Custom Holiday'];

  const filtered = selectedType === 'All'
    ? TOURS_DATA
    : TOURS_DATA.filter(t => t.type === selectedType);

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              <span>Tailored Travel Experiences</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Tour Packages & Itineraries
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore meticulously organized holiday itineraries, day sightseeing trips, corporate retreats, and spiritual pilgrimages designed with personal Malaysian hospitality.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto max-w-full">
            {tourTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedType === type
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold text-sky-300">
                      {tour.type}
                    </span>
                    <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 flex items-center gap-1 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{tour.destination}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {tour.summary}
                  </p>

                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Package Inclusions:
                    </span>
                    {tour.inclusions.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() =>
                    openPlanner({
                      destination: tour.destination,
                      travelType: tour.type === 'Spiritual' ? 'Umrah' : 'Tours & Holidays',
                    })
                  }
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
                >
                  <span>Inquire Itinerary & Pricing</span>
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
