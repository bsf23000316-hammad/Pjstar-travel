export type ThemeMode = 'light' | 'dark' | 'system';

export type TravelServiceType = 
  | 'flights' 
  | 'visa' 
  | 'tours' 
  | 'transfers' 
  | 'umrah' 
  | 'hajj' 
  | 'corporate-travel';

export interface TravelService {
  id: TravelServiceType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tagline: string;
  image: string;
  iconName: string;
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Domestic (Malaysia)' | 'Southeast Asia' | 'East Asia' | 'Middle East' | 'Europe';
  category: 'Sightseeing' | 'Cultural & Heritage' | 'Spiritual Pilgrimage' | 'Tropical & Coastal' | 'Metropolitan';
  shortDescription: string;
  image: string;
  popularHighlights: string[];
  flightDurationFromKL: string;
  bestTimeToVisit: string;
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  country: string;
  type: 'Private Tour' | 'Group Tour' | 'Day Sightseeing' | 'Spiritual' | 'Custom Holiday';
  duration: string;
  image: string;
  summary: string;
  highlights: string[];
  inclusions: string[];
  serviceType: TravelServiceType;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  travelType: string;
  rating: number;
  reviewText: string;
  date: string;
}

export interface TravelInquiry {
  name: string;
  email: string;
  phone: string;
  travelType: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengersCount: number;
  specialRequests?: string;
}
