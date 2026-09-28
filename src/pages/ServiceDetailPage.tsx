import React from 'react';
import { useRouter } from '../context/RouterContext';
import { TRAVEL_SERVICES } from '../data/services';
import { TravelServiceType } from '../types';
import { ArrowLeft, CheckCircle2, HelpCircle, ArrowRight, MessageCircle, Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ServiceDetailPageProps {
  serviceId: TravelServiceType;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId }) => {
  const { navigate, openPlanner } = useRouter();

  const service = TRAVEL_SERVICES.find((s) => s.id === serviceId) || TRAVEL_SERVICES[0];

  return (
    <div className="pt-28 pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          type="button"
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Travel Services</span>
        </button>
      </div>

      {/* Hero Banner for Service */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden min-h-[380px] flex items-end p-8 sm:p-12 text-white">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2 inline-block">
              {service.tagline}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-2xl">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openPlanner({ travelType: service.title })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs shadow-lg transition-colors cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs backdrop-blur-sm transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Specialist</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details & Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        
        {/* Left: Benefits & Operational Process (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Key Benefits */}
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Key Service Inclusions & Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Fulfillment Process */}
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Fulfillment & Booking Workflow
            </h2>
            <div className="space-y-4">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center gap-5 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-mono text-base font-extrabold flex items-center justify-center shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-sky-500" />
              <span>Common Questions</span>
            </h2>
            <div className="space-y-4">
              {service.faq.map((faqItem, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-2">
                    {faqItem.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faqItem.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Quick Action Sidebar (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Direct Travel Desk
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mt-1">
                Consult With An Expert
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Talk directly with our team in Petaling Jaya, Selangor for prompt arrangements.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 text-sky-500" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>{COMPANY_INFO.contact.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <FileText className="w-4 h-4 text-sky-500" />
                <span>{COMPANY_INFO.contact.email}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={() => openPlanner({ travelType: service.title })}
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Open Travel Planner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
              PJ STAR TRAVEL AND TOURS SDN. BHD. adheres to Malaysian consumer travel protection guidelines and operates transparently.
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
