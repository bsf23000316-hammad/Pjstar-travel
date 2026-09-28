import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Laptop, Menu, X, Plane, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const Navbar: React.FC = () => {
  const { path, navigate, openPlanner } = useRouter();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Tours', path: '/tours' },
    { label: 'Visa', path: '/visa' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, targetPath: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(targetPath);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 glass-panel border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'py-5 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
            aria-label="PJ Star Travel and Tours Home"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
              <Plane className="w-5 h-5 -rotate-45" />
            </div>
            <span
              className={`font-display text-lg sm:text-xl font-extrabold tracking-tight transition-colors duration-200 ${
                isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
              }`}
            >
              PJ STAR TRAVEL
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = path === link.path || (link.path !== '/' && path.startsWith(link.path));
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`relative py-1 transition-colors duration-200 whitespace-nowrap ${
                    isScrolled
                      ? isActive
                        ? 'text-sky-600 dark:text-sky-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                      : isActive
                        ? 'text-sky-300 font-semibold'
                        : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Theme Toggle Button & Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setThemeDropdownOpen((prev) => !prev)}
                aria-label="Change color theme"
                className={`p-2 rounded-lg border transition-colors ${
                  isScrolled
                    ? 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    : 'border-white/20 text-white hover:bg-white/10'
                }`}
              >
                {resolvedTheme === 'dark' ? (
                  <Moon className="w-4 h-4 text-sky-400" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
              </button>

              {themeDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setThemeDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl p-1.5 z-50 text-xs">
                    <button
                      onClick={() => {
                        setTheme('light');
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                        theme === 'light'
                          ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-medium'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span>Light</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme('dark');
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                        theme === 'dark'
                          ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-medium'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Moon className="w-3.5 h-3.5 text-sky-400" />
                      <span>Dark</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme('system');
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                        theme === 'system'
                          ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-medium'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5 text-slate-500" />
                      <span>System</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Primary Action Button: Plan Your Trip */}
            <button
              type="button"
              onClick={() => openPlanner()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <span>Plan Your Trip</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className={`lg:hidden p-2 rounded-lg border transition-colors ${
                isScrolled
                  ? 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl p-6 transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = path === link.path || (link.path !== '/' && path.startsWith(link.path));
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openPlanner();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md transition-colors"
              >
                <span>Plan Your Trip</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-medium text-sm hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp PJ Star Travel</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
