import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { TRAVEL_SERVICES } from '../../data/services';
import { Plane, FileCheck, Compass, Car, Moon, Building2, ArrowUpRight } from 'lucide-react';
import { TravelServiceType } from '../../types';

export const ServicesBento: React.FC = () => {
  const { navigate } = useRouter();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-5 h-5 text-sky-500" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-sky-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-sky-500" />;
      case 'Car':
        return <Car className="w-5 h-5 text-sky-500" />;
      case 'Moon':
      case 'HeartHandshake':
        return <Moon className="w-5 h-5 text-amber-500" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-indigo-500" />;
      default:
        return <Plane className="w-5 h-5 text-sky-500" />;
    }
  };

  const handleCardClick = (id: TravelServiceType) => {
    navigate(`/services/${id}`);
  };

  return (
    <section id="services-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Petaling Jaya, Selangor</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Everything You Need for the Journey
          </h2>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
          From commercial flight ticketing and consular visas to holy pilgrimage packages and chauffeured airport transfers.
        </p>
      </div>

      {/* Services Grid (6 Primary Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {TRAVEL_SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service.id)}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer"
          >
            {/* Visual Thumbnail with zoom on hover */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              {/* Category / Service Badge in top corner */}
              <div className="absolute top-4 left-4 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm">
                {getIcon(service.iconName)}
              </div>

              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-xs font-semibold text-sky-300 tracking-wide">
                  {service.tagline}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
              </div>

              {/* Service Highlights / Bullet points */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {service.benefits.length} verified features
                </span>
                
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Learn Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
