import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { TOURS_DATA } from '../../data/tours';
import { Clock, MapPin, Check, ArrowRight, ArrowUpRight } from 'lucide-react';

export const FeaturedTours: React.FC = () => {
  const { navigate, openPlanner } = useRouter();
  const [selectedType, setSelectedType] = useState<string>('All');

  const tourTypes = ['All', 'Day Sightseeing', 'Private Tour', 'Spiritual', 'Group Tour'];

  const filteredTours = selectedType === 'All'
    ? TOURS_DATA
    : TOURS_DATA.filter((tour) => tour.type === selectedType);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <span>Curated Travel Packages</span>
            <span aria-hidden="true">·</span>
            <span>Domestic & Overseas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Tour Experiences
          </h2>
        </div>

        {/* Filter Pills (Allowed for functional button interactive filter controls per section 1A) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto max-w-full">
          {tourTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
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

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image banner with duration and type */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
                
                {/* Clean unboxed text metadata on overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold text-sky-300">
                    {tour.type}
                  </span>
                  <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md font-medium text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>{tour.duration}</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 flex items-center gap-1 text-xs text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{tour.destination}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {tour.summary}
                </p>

                {/* Inclusions / Highlights */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Included Highlights:
                  </span>
                  {tour.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  openPlanner({
                    destination: tour.destination,
                    travelType: tour.type === 'Spiritual' ? 'Umrah' : 'Tours & Holidays',
                  })
                }
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
              >
                <span>Inquire Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/tours')}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label={`View tour ${tour.title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          type="button"
          onClick={() => navigate('/tours')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-xs transition-colors"
        >
          <span>Explore All Tour Itineraries</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
