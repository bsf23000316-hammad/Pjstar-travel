import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Plane, Calendar, MapPin, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TravelPlanner: React.FC = () => {
  const { openPlanner } = useRouter();

  const [travelType, setTravelType] = useState('Flight');
  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState('Kuala Lumpur (KUL)');
  const [travelDate, setTravelDate] = useState('');

  const travelTypes = [
    'Flight',
    'Visa Assistance',
    'Tours & Holidays',
    'Umrah',
    'Hajj',
    'Airport Transfer',
    'Corporate Travel',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openPlanner({
      travelType,
      destination: destination || 'Popular Destinations',
      departureDate: travelDate || new Date().toISOString().split('T')[0],
      passengersCount: 2,
    });
  };

  return (
    <section className="relative -mt-12 sm:-mt-16 z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-black/40 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Plan Your Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Personalized flight, tour, visa, or pilgrimage consultation from PJ Star Travel experts.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Consultation & Direct Booking Support</span>
          </div>
        </div>

        {/* Travel Type Selectors */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-5 no-scrollbar" role="tablist" aria-label="Select Travel Type">
          {travelTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setTravelType(type)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                travelType === type
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Departure Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Departure
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="e.g. Kuala Lumpur (KUL)"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
                required
              />
            </div>
          </div>

          {/* Destination Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Destination
            </label>
            <div className="relative">
              <Compass className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Makkah, Tokyo, Penang, London"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
                required
              />
            </div>
          </div>

          {/* Tentative Travel Date Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Travel Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
              />
            </div>
          </div>

          {/* CTA Action */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full h-[42px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] whitespace-nowrap cursor-pointer"
            >
              <span>Start Planning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};
