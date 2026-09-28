import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Quick message preview tooltip */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl p-3.5 text-xs text-slate-700 dark:text-slate-200 relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-slate-900 dark:text-white mb-1">
            PJ Star Travel Support
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Have questions about flights, visa requirements, or holiday tours? Chat directly with our travel desk.
          </p>
          <a
            href={COMPANY_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Start WhatsApp Chat →
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={COMPANY_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat with PJ Star Travel on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
