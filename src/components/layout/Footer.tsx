import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Plane, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const Footer: React.FC = () => {
  const { navigate, openPlanner } = useRouter();

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Subtle background route wave SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M-100 400 C 300 200, 600 600, 1300 300"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <circle cx="200" cy="300" r="4" fill="currentColor" />
          <circle cx="650" cy="550" r="4" fill="currentColor" />
          <circle cx="1050" cy="350" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                PJ STAR TRAVEL
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              PJ STAR TRAVEL AND TOURS SDN. BHD. is a Malaysian travel agency based in Petaling Jaya, Selangor. Providing dedicated flight ticketing, visa assistance, curated tours, airport transfers, Umrah & Hajj travel, and corporate travel logistics.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-sky-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Registered Travel Agency · Petaling Jaya, Selangor</span>
            </div>
          </div>

          {/* Travel Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/services/flights"
                  onClick={(e) => { e.preventDefault(); navigate('/services/flights'); }}
                  className="hover:text-white transition-colors"
                >
                  Flight Ticketing
                </a>
              </li>
              <li>
                <a
                  href="/services/visa"
                  onClick={(e) => { e.preventDefault(); navigate('/services/visa'); }}
                  className="hover:text-white transition-colors"
                >
                  Visa Assistance
                </a>
              </li>
              <li>
                <a
                  href="/services/tours"
                  onClick={(e) => { e.preventDefault(); navigate('/services/tours'); }}
                  className="hover:text-white transition-colors"
                >
                  Tours & Holidays
                </a>
              </li>
              <li>
                <a
                  href="/services/transfers"
                  onClick={(e) => { e.preventDefault(); navigate('/services/transfers'); }}
                  className="hover:text-white transition-colors"
                >
                  Airport Transfers
                </a>
              </li>
              <li>
                <a
                  href="/services/umrah"
                  onClick={(e) => { e.preventDefault(); navigate('/services/umrah'); }}
                  className="hover:text-white transition-colors"
                >
                  Umrah Pilgrimage
                </a>
              </li>
              <li>
                <a
                  href="/services/corporate-travel"
                  onClick={(e) => { e.preventDefault(); navigate('/services/corporate-travel'); }}
                  className="hover:text-white transition-colors"
                >
                  Corporate Travel
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/destinations"
                  onClick={(e) => { e.preventDefault(); navigate('/destinations'); }}
                  className="hover:text-white transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="/tours"
                  onClick={(e) => { e.preventDefault(); navigate('/tours'); }}
                  className="hover:text-white transition-colors"
                >
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="/visa"
                  onClick={(e) => { e.preventDefault(); navigate('/visa'); }}
                  className="hover:text-white transition-colors"
                >
                  Visa Requirements
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); navigate('/about'); }}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Location
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openPlanner()}
                  className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <span>Build Your Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Petaling Jaya Office
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Petaling Jaya, Selangor Darul Ehsan, Malaysia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} PJ STAR TRAVEL AND TOURS SDN. BHD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); navigate('/about'); }}
              className="hover:text-slate-400 transition-colors"
            >
              Company Information
            </a>
            <span>·</span>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="hover:text-slate-400 transition-colors"
            >
              Direct Inquiry
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
