import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TravelPlanner } from '../components/sections/TravelPlanner';
import { ServicesBento } from '../components/sections/ServicesBento';
import { InteractiveMap } from '../components/sections/InteractiveMap';
import { VisaProcess } from '../components/sections/VisaProcess';
import { FeaturedTours } from '../components/sections/FeaturedTours';
import { ScrollStorytelling } from '../components/sections/ScrollStorytelling';
import { TrustSection } from '../components/sections/TrustSection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { FinalCTA } from '../components/sections/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Cinematic Hero with Airplane flight animation */}
      <HeroSection />

      {/* 2. Interactive Lead Generation Planner */}
      <TravelPlanner />

      {/* 3. Primary Services Grid */}
      <ServicesBento />

      {/* 4. Interactive Route Map & Destinations */}
      <InteractiveMap />

      {/* 5. Visa Assistance 3-Step Process */}
      <VisaProcess />

      {/* 6. Curated Tour Packages */}
      <FeaturedTours />

      {/* 7. Journey Storytelling & Airport Transfer Vehicle Animation */}
      <ScrollStorytelling />

      {/* 8. Factual Agency Trust Criteria */}
      <TrustSection />

      {/* 9. Traveler Feedback & Reviews Carousel */}
      <ReviewsSection />

      {/* 10. Cinematic Final CTA */}
      <FinalCTA />
    </main>
  );
};
