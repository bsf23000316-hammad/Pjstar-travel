import React from 'react';
import { useRouter } from '../context/RouterContext';
import { TRAVEL_SERVICES } from '../data/services';
import { Plane, ArrowRight, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const ServicesPage: React.FC = () => {
  const { navigate, openPlanner } = useRouter();

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>PJ Star Travel & Tours</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Travel Services & Specialized Logistics
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            From international air ticketing and complex visas to private chauffeured transfers, domestic sightseeing, and spiritual pilgrimage arrangements in Makkah & Madinah.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {TRAVEL_SERVICES.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } gap-8 lg:gap-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm`}
          >
            {/* Image side */}
            <div className="lg:w-1/2 rounded-2xl overflow-hidden relative h-64 sm:h-80 bg-slate-100 dark:bg-slate-800">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  {service.tagline}
                </span>
                <h3 className="font-display text-xl font-bold mt-1">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 mb-1 block">
                  CAPABILITY 0{index + 1}
                </span>
                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  <span>Read Full Service Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => openPlanner({ travelType: service.title })}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition-colors cursor-pointer"
                >
                  <span>Inquire Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Support CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800">
          <h3 className="font-display text-2xl font-bold mb-3">
            Need a Customized Combination?
          </h3>
          <p className="text-sm text-slate-400 max-w-lg mx-auto mb-6">
            We regularly bundle flights, transfers, visa assistance, and private hotel itineraries for groups and families.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => openPlanner()}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-colors"
            >
              Build Custom Package
            </button>
            <a
              href={COMPANY_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs transition-colors"
            >
              Direct WhatsApp Assistance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
