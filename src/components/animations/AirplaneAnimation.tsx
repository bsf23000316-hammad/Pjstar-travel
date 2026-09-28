import React, { useEffect, useState } from 'react';

interface AirplaneAnimationProps {
  scrollProgress?: number;
  className?: string;
}

export const AirplaneAnimation: React.FC<AirplaneAnimationProps> = ({ className = '' }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scroll = window.scrollY;
          // Subtly bank and shift the airplane with scroll
          setOffsetY(Math.min(scroll * 0.25, 200));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none select-none transition-transform duration-700 ease-out ${className}`}
      style={{
        transform: `translate3d(${offsetY * 0.6}px, ${-offsetY * 0.4}px, 0)`,
      }}
    >
      <div className="relative animate-flight-sway">
        {/* Subtle ground/cloud shadow */}
        <div
          className="absolute -bottom-10 left-6 w-36 h-6 bg-slate-950/20 blur-md rounded-full transform -rotate-6 scale-y-50"
          aria-hidden="true"
        />

        {/* Sophisticated Commercial Airliner SVG */}
        <svg
          viewBox="0 0 240 120"
          className="w-48 sm:w-64 md:w-80 h-auto filter drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fuselageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="60%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
            <linearGradient id="glowGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Engine contrail subtle glow */}
          <path
            d="M 50 78 L 0 88"
            stroke="url(#glowGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Fuselage Main Body */}
          <path
            d="M 230 45 C 205 32, 140 32, 70 38 C 45 40, 20 48, 12 55 C 8 59, 14 65, 30 65 C 80 65, 175 62, 215 54 C 228 51, 236 48, 230 45 Z"
            fill="url(#fuselageGrad)"
            stroke="#94A3B8"
            strokeWidth="0.7"
          />

          {/* Cockpit Window Visor */}
          <path
            d="M 215 44 C 218 43, 224 45, 225 47 C 222 48, 215 47, 213 46 Z"
            fill="#0F172A"
          />

          {/* Fuselage Passenger Cabin Windows */}
          <g fill="#0284C7" opacity="0.85">
            <circle cx="70" cy="44" r="1.4" />
            <circle cx="80" cy="44" r="1.4" />
            <circle cx="90" cy="44" r="1.4" />
            <circle cx="100" cy="44" r="1.4" />
            <circle cx="110" cy="44" r="1.4" />
            <circle cx="120" cy="44" r="1.4" />
            <circle cx="130" cy="44" r="1.4" />
            <circle cx="140" cy="44" r="1.4" />
            <circle cx="150" cy="44" r="1.4" />
            <circle cx="160" cy="44" r="1.4" />
            <circle cx="170" cy="44" r="1.4" />
            <circle cx="180" cy="44" r="1.4" />
            <circle cx="190" cy="44" r="1.4" />
          </g>

          {/* Vertical Tail Fin */}
          <path
            d="M 35 40 L 15 10 C 13 7, 18 5, 24 6 L 55 38 Z"
            fill="url(#wingGrad)"
            stroke="#0369A1"
            strokeWidth="0.5"
          />
          {/* PJ Star motif on tail */}
          <path
            d="M 24 18 L 27 24 L 33 25 L 28 29 L 29 35 L 24 31 L 19 35 L 21 29 L 16 25 L 22 24 Z"
            fill="#FACC15"
            transform="scale(0.4) translate(35, 22)"
          />

          {/* Horizontal Tail Stabilizer */}
          <path
            d="M 22 55 L 4 58 C 2 59, 4 62, 8 62 L 32 58 Z"
            fill="#94A3B8"
          />

          {/* Swept Main Wing (Port Wing Foreground) */}
          <path
            d="M 125 50 L 50 95 C 44 98, 48 101, 55 98 L 155 58 Z"
            fill="url(#wingGrad)"
            stroke="#0369A1"
            strokeWidth="0.5"
          />

          {/* High-Bypass Turbofan Jet Engine Underwing */}
          <ellipse
            cx="95"
            cy="75"
            rx="16"
            ry="6"
            fill="#334155"
            transform="rotate(-15 95 75)"
          />
          <ellipse
            cx="98"
            cy="74"
            rx="14"
            ry="4.5"
            fill="#64748B"
            transform="rotate(-15 98 74)"
          />
          <circle
            cx="108"
            cy="71"
            r="3"
            fill="#0F172A"
          />
        </svg>
      </div>

      <style>{`
        @keyframes flightSway {
          0%, 100% {
            transform: translateY(0px) rotate(-1deg);
          }
          50% {
            transform: translateY(-8px) rotate(1.5deg);
          }
        }
        .animate-flight-sway {
          animation: flightSway 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
