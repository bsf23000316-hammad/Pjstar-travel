import React from 'react';
import { ShieldCheck, Plane, FileCheck, Users, MapPin, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-500" />,
      title: 'Registered Travel Agency',
      description: 'Officially incorporated in Malaysia under PJ STAR TRAVEL AND TOURS SDN. BHD., operating out of Petaling Jaya, Selangor.',
    },
    {
      icon: <Plane className="w-5 h-5 text-sky-500" />,
      title: 'Dedicated Flight Ticketing',
      description: 'Full-service air ticketing assistance for domestic and international carriers, group allocations, and route management.',
    },
    {
      icon: <FileCheck className="w-5 h-5 text-sky-500" />,
      title: 'Visa & Consular Support',
      description: 'Rigorous documentation auditing and guidance for international tourist, business, and pilgrimage entry categories.',
    },
    {
      icon: <Users className="w-5 h-5 text-sky-500" />,
      title: 'Tailored Group & Corporate Travel',
      description: 'Coordinated travel solutions for corporate delegations, multi-generational family reunions, and religious pilgrimages.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <CheckCircle className="w-4 h-4 text-sky-500" />
            <span>Factual Agency Standards</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Travel With Confidence
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Every itinerary is managed with transparent communication, documented procedures, and verified local travel partners.
          </p>
        </div>

        {/* 4 Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center mb-4">
                  {point.icon}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-sky-600 dark:text-sky-400">
                Verified Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
