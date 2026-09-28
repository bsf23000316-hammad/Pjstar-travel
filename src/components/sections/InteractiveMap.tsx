import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { DESTINATIONS } from '../../data/destinations';
import { MapPin, Plane, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface RouteNode {
  id: string;
  name: string;
  country: string;
  x: number; // percentage coordinate
  y: number;
  flightTime: string;
}

export const InteractiveMap: React.FC = () => {
  const { navigate, openPlanner } = useRouter();
  const [activeNodeId, setActiveNodeId] = useState<string>('makkah-madinah');

  const nodes: RouteNode[] = [
    { id: 'kuala-lumpur-selangor', name: 'Petaling Jaya / KL', country: 'Malaysia (Hub)', x: 62, y: 64, flightTime: 'Home Base' },
    { id: 'bangkok-central', name: 'Bangkok', country: 'Thailand', x: 60, y: 50, flightTime: '2h 10m' },
    { id: 'singapore-city', name: 'Singapore', country: 'Singapore', x: 63, y: 69, flightTime: '1h 00m' },
    { id: 'tokyo-japan', name: 'Tokyo', country: 'Japan', x: 82, y: 38, flightTime: '7h 00m' },
    { id: 'makkah-madinah', name: 'Makkah & Madinah', country: 'Saudi Arabia', x: 34, y: 46, flightTime: '8h 30m' },
  ];

  const activeDestination = DESTINATIONS.find((d) => d.id === activeNodeId) || DESTINATIONS[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
            <Plane className="w-4 h-4 -rotate-45" />
            <span>Interactive Travel Corridor Network</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Departing from Petaling Jaya & KLIA
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Explore flight connections and curated travel routes arranged by PJ Star Travel specialists. Select a coordinate to view details.
          </p>
        </div>

        {/* Map & Preview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive SVG Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 relative min-h-[380px] flex items-center justify-center">
            
            {/* SVG Flight Paths and Grid Lines */}
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-auto max-h-[360px] select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Subtle longitude & latitude arcs */}
              <g stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1" strokeDasharray="3 3">
                <line x1="0" y1="150" x2="1000" y2="150" />
                <line x1="0" y1="300" x2="1000" y2="300" />
                <line x1="0" y1="450" x2="1000" y2="450" />
                <line x1="250" y1="0" x2="250" y2="600" />
                <line x1="500" y1="0" x2="500" y2="600" />
                <line x1="750" y1="0" x2="750" y2="600" />
              </g>

              {/* Simplified stylized continental landmass silhouettes */}
              <path
                d="M100 200 Q200 150 350 220 T550 250 T750 200 T900 260"
                stroke="rgba(56, 189, 248, 0.15)"
                strokeWidth="24"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M500 320 Q600 370 650 440 T680 520"
                stroke="rgba(56, 189, 248, 0.15)"
                strokeWidth="20"
                strokeLinecap="round"
                fill="none"
              />

              {/* Flight Path Arcs from KL (620, 384) */}
              {/* Route to Makkah (340, 276) */}
              <path
                d="M 620 384 Q 460 220 340 276"
                stroke={activeNodeId === 'makkah-madinah' ? '#38BDF8' : 'rgba(56, 189, 248, 0.35)'}
                strokeWidth={activeNodeId === 'makkah-madinah' ? 2.5 : 1.5}
                strokeDasharray="6 4"
                className="transition-all duration-300"
              />
              {/* Route to Tokyo (820, 228) */}
              <path
                d="M 620 384 Q 740 260 820 228"
                stroke={activeNodeId === 'tokyo-japan' ? '#38BDF8' : 'rgba(56, 189, 248, 0.35)'}
                strokeWidth={activeNodeId === 'tokyo-japan' ? 2.5 : 1.5}
                strokeDasharray="6 4"
                className="transition-all duration-300"
              />
              {/* Route to Bangkok (600, 300) */}
              <path
                d="M 620 384 Q 610 330 600 300"
                stroke={activeNodeId === 'bangkok-central' ? '#38BDF8' : 'rgba(56, 189, 248, 0.35)'}
                strokeWidth={activeNodeId === 'bangkok-central' ? 2.5 : 1.5}
                strokeDasharray="6 4"
                className="transition-all duration-300"
              />
              {/* Route to Singapore (630, 414) */}
              <path
                d="M 620 384 L 630 414"
                stroke={activeNodeId === 'singapore-city' ? '#38BDF8' : 'rgba(56, 189, 248, 0.35)'}
                strokeWidth={activeNodeId === 'singapore-city' ? 2.5 : 1.5}
                strokeDasharray="4 2"
                className="transition-all duration-300"
              />
            </svg>

            {/* Interactive Node Markers */}
            {nodes.map((node) => {
              const isSelected = activeNodeId === node.id;
              const isHub = node.id === 'kuala-lumpur-selangor';

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNodeId(node.id)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                  aria-label={`Select ${node.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ripple on active */}
                    {isSelected && (
                      <span className="absolute w-8 h-8 rounded-full bg-sky-400/30 animate-ping" />
                    )}
                    
                    {/* Node Dot */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full transition-transform duration-200 ${
                        isHub
                          ? 'bg-amber-400 ring-4 ring-amber-400/20'
                          : isSelected
                            ? 'bg-sky-400 ring-4 ring-sky-400/30 scale-125'
                            : 'bg-slate-400 hover:bg-sky-300'
                      }`}
                    />

                    {/* Label Badge */}
                    <span
                      className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold px-2 py-0.5 rounded-md transition-colors ${
                        isSelected
                          ? 'bg-sky-500 text-white shadow-md'
                          : 'bg-slate-900/90 text-slate-300 border border-slate-800'
                      }`}
                    >
                      {node.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Destination Spotlight Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                {activeDestination.region}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{activeDestination.flightDurationFromKL}</span>
              </div>
            </div>

            <div className="h-44 rounded-xl overflow-hidden mb-5 relative">
              <img
                src={activeDestination.image}
                alt={activeDestination.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <h3 className="font-display text-xl font-bold text-white">
                  {activeDestination.name}
                </h3>
                <span className="text-xs text-slate-300">
                  {activeDestination.country}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {activeDestination.shortDescription}
            </p>

            <div className="space-y-2 mb-6">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Key Highlights:
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                {activeDestination.popularHighlights.map((highlight, idx) => (
                  <span key={idx} className="bg-slate-800/80 px-2.5 py-1 rounded-md text-slate-200">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  openPlanner({
                    destination: `${activeDestination.name}, ${activeDestination.country}`,
                    travelType: activeDestination.category === 'Spiritual Pilgrimage' ? 'Umrah' : 'Tours & Holidays',
                  });
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors"
              >
                <span>Inquire Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/destinations')}
                className="py-2.5 px-4 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-medium transition-colors"
              >
                All Destinations
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
