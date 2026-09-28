import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { InteractiveJourneyPlannerModal } from './components/planner/InteractiveJourneyPlannerModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { ToursPage } from './pages/ToursPage';
import { VisaPage } from './pages/VisaPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TravelServiceType } from './types';
import { CheckCircle2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { path, toastMessage } = useRouter();

  const renderCurrentRoute = () => {
    if (path === '/' || path === '') {
      return <HomePage />;
    }
    if (path === '/services') {
      return <ServicesPage />;
    }
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '') as TravelServiceType;
      return <ServiceDetailPage serviceId={slug} />;
    }
    if (path === '/destinations') {
      return <DestinationsPage />;
    }
    if (path === '/tours') {
      return <ToursPage />;
    }
    if (path === '/visa') {
      return <VisaPage />;
    }
    if (path === '/about') {
      return <AboutPage />;
    }
    if (path === '/contact') {
      return <ContactPage />;
    }

    // Default fallback to Home
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-500 selection:text-white transition-colors duration-300">
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 max-w-sm bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 dark:border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-200 text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar />

      {/* Main Dynamic View */}
      <div className="flex-1">
        {renderCurrentRoute()}
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppButton />

      {/* Interactive Multi-step Journey Planner Modal */}
      <InteractiveJourneyPlannerModal />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
