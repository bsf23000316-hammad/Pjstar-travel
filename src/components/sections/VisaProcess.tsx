import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Compass, FileText, CheckCircle2, Stamp, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export const VisaProcess: React.FC = () => {
  const { navigate, openPlanner } = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Choose Your Destination',
      description: 'Consult with our travel specialists regarding specific entry permits, electronic travel authorizations (e-Visas), or consular appointment requirements.',
      icon: <Compass className="w-6 h-6 text-sky-500" />,
      detail: 'Requirements vary based on nationality, travel purpose (tourism, business, pilgrimage), and duration of stay.',
    },
    {
      num: '02',
      title: 'Prepare Your Documents',
      description: 'Receive an audited, structured checklist tailored to consular guidelines. We cross-verify photo dimensions, passport validity, and financial records.',
      icon: <FileText className="w-6 h-6 text-sky-500" />,
      detail: 'Our systematic document review minimizes clerical omissions and formatting mismatches prior to formal filing.',
    },
    {
      num: '03',
      title: 'Complete Your Application',
      description: 'Submit through authorized consular portals or receive structured briefing for biometric appointment attendance at the relevant embassy center.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
      detail: 'Real-time filing tracking with status updates until visa decision release by immigration authorities.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <Stamp className="w-4 h-4" />
            <span>Travel Documentation Guidance</span>
            <span aria-hidden="true">·</span>
            <span>Petaling Jaya Service Desk</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Visa Assistance Made Simple
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            International visa protocols can be intricate. We provide meticulous document audits and submission advisory to ensure your paperwork strictly adheres to consular requirements.
          </p>
        </div>

        {/* 3-Step Interactive Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative rounded-2xl p-7 transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 border-sky-500/50 shadow-lg shadow-sky-500/5 -translate-y-1'
                    : 'bg-white/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-xs font-black tracking-widest text-sky-600 dark:text-sky-400">
                      STEP {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Additional context detail */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  {step.detail}
                </div>
              </div>
            );
          })}

        </div>

        {/* Responsible Disclaimer Box & Action */}
        <div className="mt-10 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-700 dark:text-slate-300">Consular Compliance Notice:</strong> Visa approvals and processing timeframes remain at the sole discretion of respective foreign embassies and immigration authorities. PJ Star Travel provides document audit, preparation, and appointment coordination services.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openPlanner({ travelType: 'Visa Assistance' })}
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              Request Visa Checklist
            </button>
            <button
              type="button"
              onClick={() => navigate('/visa')}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs transition-colors whitespace-nowrap"
            >
              View Visa Guide
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
