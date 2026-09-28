import { TravelService } from '../types';

export const TRAVEL_SERVICES: TravelService[] = [
  {
    id: 'flights',
    title: 'Flight Services & Air Ticketing',
    tagline: 'Domestic & International Route Coordination',
    shortDescription: 'Comprehensive flight booking assistance, itinerary optimization, group block seatings, and ticketing support across global airlines.',
    fullDescription: 'PJ Star Travel provides end-to-end air travel ticketing assistance for business professionals, families, and group travelers departing from Malaysia or international hubs. We help you navigate routes, airline fare classes, baggage allowances, and date adjustments with personal care.',
    image: '/src/assets/images/service_flight_sky_1790599700925.jpg',
    iconName: 'Plane',
    benefits: [
      'Comparative fare research across full-service and regional carriers',
      'Flexible booking coordination for multi-city and complex legs',
      'Group ticketing assistance for family reunions and corporate delegations',
      'Direct support for schedule re-routing and airline schedule updates',
      'Special baggage and seat reservation assistance',
    ],
    process: [
      {
        step: '01',
        title: 'Submit Route Inquiry',
        description: 'Provide departure and arrival destinations, preferred travel dates, cabin class, and passenger counts.',
      },
      {
        step: '02',
        title: 'Review Flight Options',
        description: 'Our ticketing consultants present optimal schedules, layovers, baggage terms, and transparent fare quotes.',
      },
      {
        step: '03',
        title: 'Issuance & Travel Pack',
        description: 'Upon confirmation, e-tickets, boarding guides, and airline confirmation codes are delivered directly to your inbox.',
      },
    ],
    faq: [
      {
        question: 'Can PJ Star Travel manage multi-city or complex international itineraries?',
        answer: 'Yes. We specialize in coordinated multi-leg journeys, stopovers, and open-jaw routes that require expert routing knowledge.',
      },
      {
        question: 'What happens if an airline reschedules my flight before departure?',
        answer: 'Our travel desk actively monitors bookings and coordinates with the operating airline to arrange re-accommodation or itinerary updates.',
      },
      {
        question: 'Do you arrange flight ticketing for large groups?',
        answer: 'Yes. We handle group block ticketing for family groups, corporate teams, and pilgrim delegations traveling together.',
      },
    ],
  },
  {
    id: 'visa',
    title: 'Visa Assistance & Travel Documentation',
    tagline: 'Clear Guidance for International Entry Requirements',
    shortDescription: 'Personalized document check-lists, application form reviews, appointment scheduling, and procedural guidance for international visas.',
    fullDescription: 'Navigating international entry permits and consular protocols can be demanding. PJ Star Travel guides Malaysian citizens and resident expatriates through entry visa requirements, preparing comprehensive document bundles to ensure compliance with consular guidelines.',
    image: '/src/assets/images/hero_travel_journey_1790599683575.jpg',
    iconName: 'FileCheck',
    benefits: [
      'Verified document checklist customized to destination consulate regulations',
      'Rigorous review of photo dimensions, validity periods, and financial proofs',
      'Guidance for e-Visa portals, consular interview slots, and biometric appointments',
      'Support for tourist, visitor, business, and pilgrim entry categories',
      'Pre-departure document validity audits',
    ],
    process: [
      {
        step: '01',
        title: 'Destination Assessment',
        description: 'We review your nationality, travel purpose, and target country to establish exact consular requirements.',
      },
      {
        step: '02',
        title: 'Document Assembly & Verification',
        description: 'Receive a personalized submission checklist; our specialists inspect your files before submission to reduce rejection risks.',
      },
      {
        step: '03',
        title: 'Application & Tracking',
        description: 'We facilitate submission through authorized channels or schedule your consular appointment with clear preparation.',
      },
    ],
    faq: [
      {
        question: 'Does PJ Star Travel guarantee visa issuance?',
        answer: 'No agency can legally guarantee visa approval, as decisions rest solely with consular authorities. However, our meticulous document audits minimize clerical errors and omissions.',
      },
      {
        question: 'How early should I apply for my travel visa?',
        answer: 'We recommend initiating visa preparations at least 4 to 8 weeks prior to intended departure, depending on destination embassy processing cycles.',
      },
      {
        question: 'Do you assist with electronic travel authorizations (e-Visas)?',
        answer: 'Yes. We support digital visa applications, Australia ETA, US ESTA, and Asian e-Visa registrations.',
      },
    ],
  },
  {
    id: 'tours',
    title: 'Domestic & International Tours',
    tagline: 'Curated Sightseeing & Personalized Itineraries',
    shortDescription: 'Hand-crafted holiday packages, day excursions, city sightseeing, and private family tour arrangements across Malaysia and premier overseas destinations.',
    fullDescription: 'Experience travel that feels thoughtful and seamlessly organized. From cultural heritage explorations in Peninsular Malaysia to iconic city highlights across Asia, PJ Star Travel designs tour packages that balance must-see sights with leisure time.',
    image: '/src/assets/images/destination_malaysia_kl_1790599716466.jpg',
    iconName: 'Compass',
    benefits: [
      'Tailored pacing suited for multi-generational families or independent travelers',
      'Professional local guide arrangements and verified transportation',
      'Curated hotel selections in central, safe, and scenic neighborhoods',
      'Flexible customizable day tours and private vehicle excursions',
      'Transparent inclusions without hidden mandatory shopping stops',
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Preferences',
        description: 'Tell us your preferred destination, travel style, party size, and must-see attractions.',
      },
      {
        step: '02',
        title: 'Custom Itinerary Proposal',
        description: 'We provide a day-by-day travel plan including transport, lodging, sightseeing, and meal options.',
      },
      {
        step: '03',
        title: 'Seamless Travel Execution',
        description: 'Vouchers, local contact points, and journey coordinates are provided before you embark on your trip.',
      },
    ],
    faq: [
      {
        question: 'Can tours be customized for private family groups?',
        answer: 'Absolutely. We frequently arrange private chauffeured tours with personalized itineraries and dining preferences.',
      },
      {
        question: 'Do you offer single-day sightseeing tours in Malaysia?',
        answer: 'Yes. We arrange day tours covering Kuala Lumpur, Putrajaya, Malacca, Genting Highlands, and Selangor cultural attractions.',
      },
      {
        question: 'Are tour packages inclusive of flights and hotel?',
        answer: 'We provide both full-package arrangements (flights + hotel + tours) and land-only arrangements depending on your preference.',
      },
    ],
  },
  {
    id: 'transfers',
    title: 'Airport Transfers & Private Transportation',
    tagline: 'Reliable Chauffeured Mobility Across Malaysia',
    shortDescription: 'Punctual airport meet-and-greet transfers (KLIA / KLIA2 / Subang), executive MPVs, and private point-to-point charters for individuals and groups.',
    fullDescription: 'Start and conclude your journey with complete peace of mind. PJ Star Travel coordinates professional airport transfers and private transport throughout Petaling Jaya, the Klang Valley, and major Malaysian travel corridors with comfortable, air-conditioned vehicles.',
    image: '/src/assets/images/hero_travel_journey_1790599683575.jpg',
    iconName: 'Car',
    benefits: [
      'Punctual flight tracking for on-time airport pickup without waiting anxiety',
      'Comfortable fleet options including sedans, spacious MPVs, and passenger vans',
      'Professional, courteous local drivers familiar with Klang Valley routes',
      'Luggage assistance and direct door-to-terminal service',
      'Point-to-point interstate travel charters available upon request',
    ],
    process: [
      {
        step: '01',
        title: 'Provide Flight Schedule',
        description: 'Share your flight number, arrival/departure airport, and luggage volume.',
      },
      {
        step: '02',
        title: 'Vehicle Allocation',
        description: 'We match your group size with a suitable, comfortable vehicle and provide driver details in advance.',
      },
      {
        step: '03',
        title: 'Smooth Pickup & Transfer',
        description: 'Your chauffeur greets you at the designated terminal meeting point or your doorstep.',
      },
    ],
    faq: [
      {
        question: 'Which airports do you cover for transfers?',
        answer: 'We provide scheduled transfers to and from KLIA Terminal 1, KLIA Terminal 2, and Sultan Abdul Aziz Shah Airport (Subang Airport).',
      },
      {
        question: 'What vehicle types are available for booking?',
        answer: 'We arrange executive sedans (1–3 passengers), spacious MPVs such as Toyota Innova/Vellfire (3–5 passengers with luggage), and 10–14 seater vans for larger groups.',
      },
      {
        question: 'How do you handle delayed flight arrivals?',
        answer: 'Our dispatch team tracks incoming flight status in real time to adjust chauffeur pickup times accordingly.',
      },
    ],
  },
  {
    id: 'umrah',
    title: 'Umrah Travel Assistance',
    tagline: 'Sacred Pilgrimage Coordination with Care',
    shortDescription: 'Devoted spiritual journey facilitation, visa processing, accommodation in proximity to the Holy Mosques in Makkah & Madinah, and local logistics.',
    fullDescription: 'Embarking on the blessed Umrah pilgrimage requires reverent attention to detail. PJ Star Travel assists Malaysian pilgrims with visa requirements, flight bookings, verified hotel accommodations near the Haramain, and trusted ground support.',
    image: '/src/assets/images/destination_mecca_spiritual_1790599731723.jpg',
    iconName: 'Moon',
    benefits: [
      'Specialized Umrah visa facilitation and documentation compliance',
      'Carefully selected hotels within walking distance of Masjid al-Haram and Masjid an-Nabawi',
      'Coordination of air travel on reputable airlines with group flight allocations',
      'Assistance with Nusuk permits, ziarah excursions, and local ground transfers',
      'Experienced Mutawwif and ground coordinator support arrangements',
    ],
    process: [
      {
        step: '01',
        title: 'Pilgrimage Consultation',
        description: 'We discuss your preferred season, family accommodation needs, and room configurations.',
      },
      {
        step: '02',
        title: 'Documentation & Visa Processing',
        description: 'We assist with passport validation, required documentation, and Umrah visa registration.',
      },
      {
        step: '03',
        title: 'Departure Preparation',
        description: 'Pre-departure briefing, flight ticketing, itinerary details, and emergency support channels provided.',
      },
    ],
    faq: [
      {
        question: 'What documents are required for Umrah visa processing?',
        answer: 'A valid passport with at least 6 months validity, recent passport photographs, and compliance with the latest Saudi Ministry of Hajj & Umrah guidelines.',
      },
      {
        question: 'Can senior citizens or wheelchair users be accommodated?',
        answer: 'Yes. We prioritize ground-floor access or hotels with direct shuttle/lift access and can arrange dedicated ground assistance.',
      },
      {
        question: 'Do you arrange Ziarah (historical site visits) in Makkah and Madinah?',
        answer: 'Yes. Itineraries can include guided visits to historical locations like Jabal al-Noor, Mount Uhud, and Quba Mosque.',
      },
    ],
  },
  {
    id: 'hajj',
    title: 'Hajj Travel Guidance & Inquiries',
    tagline: 'Comprehensive Support for the Fifth Pillar of Islam',
    shortDescription: 'Guidance on regulatory requirements, registration procedures, preparatory documentation, and travel logistics in coordination with official frameworks.',
    fullDescription: 'Hajj is the journey of a lifetime. PJ Star Travel provides advisory support, documentation assistance, and informational coordination aligned with Malaysian and Saudi regulatory standards to assist intending pilgrims.',
    image: '/src/assets/images/destination_mecca_spiritual_1790599731723.jpg',
    iconName: 'HeartHandshake',
    benefits: [
      'Guidance regarding official registration channels and documentation prerequisites',
      'Support with flight booking alignment and transit preparations',
      'Advisory on health protocols and consular requirements',
      'Support for accompanying family members and logistics coordination',
      'Direct customer consultation at our Petaling Jaya office',
    ],
    process: [
      {
        step: '01',
        title: 'Regulatory Advisory',
        description: 'Consultation on current official pilgrimage quotas and regulatory criteria.',
      },
      {
        step: '02',
        title: 'Documentation Readiness',
        description: 'Preparation of supporting civil documents, health certificates, and identification requirements.',
      },
      {
        step: '03',
        title: 'Logistics Facilitation',
        description: 'Coordination of flight itineraries and preparation briefings for authorized pilgrims.',
      },
    ],
    faq: [
      {
        question: 'How do Hajj regulations operate in Malaysia?',
        answer: 'Hajj participation is subject to official quota allocations and regulatory oversight by Lembaga Tabung Haji and the Ministry of Hajj and Umrah. We provide consultative guidance within recognized frameworks.',
      },
      {
        question: 'When should intending pilgrims begin preparation?',
        answer: 'Documentary readiness and official registrations should be organized well in advance of the annual Hajj season.',
      },
      {
        question: 'Where can we consult PJ Star Travel team members?',
        answer: 'You are welcome to consult our travel advisors via phone, WhatsApp, or at our office in Petaling Jaya, Selangor.',
      },
    ],
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel & Group Logistics',
    tagline: 'Efficient Travel Management for Enterprises & Organizations',
    shortDescription: 'Tailored travel management for companies, incentive trips, trade delegations, and institutional groups with dedicated account coordination.',
    fullDescription: 'Business travel demands punctuality, cost control, and seamless communication. PJ Star Travel delivers tailored corporate travel services for companies in Selangor, Kuala Lumpur, and nationwide, managing flights, hotel blocks, transfers, and meeting logistics.',
    image: '/src/assets/images/service_flight_sky_1790599700925.jpg',
    iconName: 'Building2',
    benefits: [
      'Dedicated travel consultant assigned to your organization',
      'Centralized booking records, invoicing, and corporate itinerary management',
      'Group logistics for company retreats, conferences, and incentive travel',
      'Flexible change handling for executive business schedules',
      'Cost-conscious options balancing comfort and organizational travel policies',
    ],
    process: [
      {
        step: '01',
        title: 'Travel Brief Submission',
        description: 'Share your company travel policy, delegation numbers, budget framework, and destination requirements.',
      },
      {
        step: '02',
        title: 'Consolidated Itinerary & Quotation',
        description: 'We present flight timetables, hotel block options, and transport schedules with clear corporate invoicing terms.',
      },
      {
        step: '03',
        title: 'On-Call Coordination',
        description: 'Our corporate travel desk remains on standby throughout the delegation journey for real-time adjustments.',
      },
    ],
    faq: [
      {
        question: 'Can you handle group incentive trips for 50+ staff members?',
        answer: 'Yes. We coordinate large-scale group logistics, charter transportation, banquet bookings, and team-building activities.',
      },
      {
        question: 'Do you offer corporate invoicing and billing support?',
        answer: 'Yes. We provide transparent corporate invoicing with itemized receipts suitable for company accounting and expense filing.',
      },
      {
        question: 'Can executive travel arrangements be made on short notice?',
        answer: 'Our consultants prioritize urgent business flight ticketing and executive MPV transfers to keep your team moving.',
      },
    ],
  },
];
