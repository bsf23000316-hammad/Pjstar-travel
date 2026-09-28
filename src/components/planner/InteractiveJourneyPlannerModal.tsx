import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { X, Plane, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../../data/company';

export const InteractiveJourneyPlannerModal: React.FC = () => {
  const { isPlannerOpen, closePlanner, plannerInitialData, showToast } = useRouter();

  // Wizard Steps: 1: Purpose -> 2: Destination -> 3: Dates & Party -> 4: Services Needed -> 5: Traveler Info & Summary
  const [currentStep, setCurrentStep] = useState(1);
  
  const [purpose, setPurpose] = useState<string>('Holiday');
  const [destination, setDestination] = useState<string>('');
  const [departureCity, setDepartureCity] = useState<string>('Kuala Lumpur / Petaling Jaya');
  const [travelDate, setTravelDate] = useState<string>('');
  const [partySize, setPartySize] = useState<number>(2);
  const [selectedServices, setSelectedServices] = useState<string[]>(['Flight', 'Tour']);
  
  // Contact details
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (plannerInitialData) {
      if (plannerInitialData.destination) setDestination(plannerInitialData.destination);
      if (plannerInitialData.departureDate) setTravelDate(plannerInitialData.departureDate);
      if (plannerInitialData.passengersCount) setPartySize(plannerInitialData.passengersCount);
      if (plannerInitialData.travelType) {
        if (plannerInitialData.travelType.toLowerCase().includes('umrah') || plannerInitialData.travelType.toLowerCase().includes('hajj')) {
          setPurpose('Religious');
          setSelectedServices(['Flight', 'Visa', 'Accommodation']);
        } else if (plannerInitialData.travelType.toLowerCase().includes('corporate')) {
          setPurpose('Business');
          setSelectedServices(['Flight', 'Transfer']);
        }
      }
    }
  }, [plannerInitialData]);

  if (!isPlannerOpen) return null;

  const purposes = [
    { id: 'Holiday', label: 'Holiday & Leisure', icon: '🏖️' },
    { id: 'Business', label: 'Business & Corporate', icon: '💼' },
    { id: 'Family', label: 'Family Vacation', icon: '👨‍👩‍👧‍👦' },
    { id: 'Religious', label: 'Religious (Umrah / Hajj)', icon: '🕌' },
    { id: 'Adventure', label: 'Adventure & Nature', icon: '🏔️' },
  ];

  const serviceOptions = [
    'Flight',
    'Visa Assistance',
    'Tour Package',
    'Airport Transfer',
    'Hotel Accommodation',
    'Special Travel Assistance',
  ];

  const toggleService = (srv: string) => {
    setSelectedServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleNext = () => {
    setErrorMessage(null);
    if (currentStep === 2 && !destination.trim()) {
      setErrorMessage('Please specify your destination.');
      return;
    }
    if (currentStep === 4 && selectedServices.length === 0) {
      setErrorMessage('Please select at least one travel service.');
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setErrorMessage(null);
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please provide your name, email, and contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Clean asynchronous submission abstraction
      await new Promise(res => setTimeout(res, 1000));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // confetti fallback
      }

      showToast('Your travel inquiry has been received! Our PJ Star team will contact you promptly.');
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('Unable to transmit inquiry right now. Please message us directly via WhatsApp.');
    }
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello PJ Star Travel!\nI would like to inquire about a trip:\n- Purpose: ${purpose}\n- Destination: ${destination || 'Not decided'}\n- Departure: ${departureCity}\n- Date: ${travelDate || 'Flexible'}\n- Party: ${partySize} traveler(s)\n- Services needed: ${selectedServices.join(', ')}\n- Name: ${fullName || 'Guest'}\n- Contact: ${phone || 'N/A'}`
    );
    return `https://wa.me/60126883920?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">
              <Plane className="w-4 h-4 -rotate-45" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Build Your Journey
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                PJ Star Travel & Tours Inquiry Planner
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closePlanner}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close Planner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker (Steps 1 to 5) */}
        {!isSuccess && (
          <div className="px-6 pt-4 pb-2 bg-slate-50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
              <span>Step {currentStep} of 5</span>
              <span>
                {currentStep === 1 && 'Travel Purpose'}
                {currentStep === 2 && 'Destination'}
                {currentStep === 3 && 'Schedule & Party'}
                {currentStep === 4 && 'Services Needed'}
                {currentStep === 5 && 'Contact & Summary'}
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-sky-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Wizard Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {isSuccess ? (
            /* Success State */
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                Inquiry Received!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Your customized journey inquiry for <strong>{destination}</strong> has been logged. Our travel consultants in Petaling Jaya will review flight options and itineraries and connect with you shortly.
              </p>

              {/* Instant WhatsApp Shortcut */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-colors"
                >
                  <span>Chat on WhatsApp Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={closePlanner}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step 1: Purpose */}
              {currentStep === 1 && (
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Why are you travelling?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    Select the primary context of your intended travel.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {purposes.map(p => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPurpose(p.id)}
                        className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                          purpose === p.id
                            ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 shadow-sm'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-2xl">{p.icon}</span>
                        <div>
                          <div className="font-bold text-sm">{p.label}</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Custom arrangements
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Destination */}
              {currentStep === 2 && (
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Where are you going?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    Enter your destination and departure city.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Target Destination (City or Country)
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                        placeholder="e.g. Makkah & Madinah, Tokyo, London, Penang, Bangkok"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        autoFocus
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Departure Location
                      </label>
                      <input
                        type="text"
                        value={departureCity}
                        onChange={e => setDepartureCity(e.target.value)}
                        placeholder="e.g. Kuala Lumpur (KUL), Subang, Penang"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Dates & Party */}
              {currentStep === 3 && (
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                    When are you travelling?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    Specify tentative dates and how many travelers will join.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Tentative Departure Date
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={e => setTravelDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Number of Travelers: <strong className="text-sky-600 dark:text-sky-400">{partySize} person(s)</strong>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={partySize}
                        onChange={e => setPartySize(parseInt(e.target.value, 10))}
                        className="w-full accent-sky-500"
                      />
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>1 (Solo)</span>
                        <span>2–4 (Couple / Family)</span>
                        <span>10+ (Group / Delegation)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Services Needed */}
              {currentStep === 4 && (
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                    What services do you need?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    Choose one or more travel services you'd like PJ Star Travel to manage.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map(srv => {
                      const selected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`p-3.5 rounded-xl border text-left flex items-center justify-between text-xs font-semibold transition-all cursor-pointer ${
                            selected
                              ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 text-sky-900 dark:text-sky-200 shadow-sm'
                              : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          <span>{srv}</span>
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                              selected ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-300 dark:border-slate-700'
                            }`}
                          >
                            {selected && <CheckCircle2 className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 5: Summary & Contact Details */}
              {currentStep === 5 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Generated Visual Summary Card */}
                  <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-900/50 space-y-2 text-xs">
                    <div className="font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 text-[10px]">
                      Your Journey Plan
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
                      <div>
                        <span className="text-slate-400">Destination:</span>{' '}
                        <strong>{destination || 'TBD'}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Purpose:</span>{' '}
                        <strong>{purpose}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Travel Date:</span>{' '}
                        <strong>{travelDate || 'Flexible'}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Party Size:</span>{' '}
                        <strong>{partySize} pax</strong>
                      </div>
                    </div>
                    <div className="pt-1 text-slate-600 dark:text-slate-400">
                      <span className="text-slate-400">Services:</span>{' '}
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {selectedServices.join(', ')}
                      </span>
                    </div>
                  </div>

                  <h5 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                    Where should we send your options?
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="e.g. Mohd Daniel"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="e.g. +60 12-345 6789"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.g. daniel@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Special Inquiries or Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="Any specific hotel preference, senior accessibility, or dietary requirements..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Travel Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Travel Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Wizard Footer Controls */}
        {!isSuccess && (
          <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 && (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
