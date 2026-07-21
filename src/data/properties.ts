import { Property } from '../types';

export const properties: Property[] = [
  {
    id: 'aurelia-penthouse-ikoyi',
    title: 'The Grand Aurelia Royal Penthouse',
    tagline: '360-degree panoramic skyline views over Five Cowries Creek and Lagos Lagoon.',
    priceRaw: 2850000000,
    priceDisplay: '₦2,850,000,000',
    location: 'Kingsway Road, Ikoyi, Lagos',
    neighborhood: 'Ikoyi',
    propertyType: 'Penthouse',
    status: 'Selling Fast',
    completionDate: 'Q4 2026',
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 11500,
    areaSqM: 1068,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The crowning achievement of modern luxury living in Ikoyi. The Grand Aurelia Penthouse occupies the entire 28th and 29th floors of our flag architectural beacon. Featuring soaring double-height ceilings, a cantilevered private infinity pool overlooking the lagoon, full automated floor-to-ceiling glass facades, private elevator access with biometric recognition, and bespoke Italian marble finishes.',
    architecturalStyle: 'Ultra-Modern Contemporary High-Rise',
    features: [
      'Private 15m Cantilevered Infinity Pool on Terrace',
      'Private Direct High-Speed Glass Elevator',
      'Double-Height Floor-to-Ceiling Triple-Glazed Facades',
      'Temperature-Controlled 300-Bottle Sommelier Wine Cellar',
      'Custom Boffi Kitchen with Miele & Gaggenau Appliances',
      'Private Spa Sanctuary with Sauna & Eucalyptus Steam Room',
      '4 Underground Reserved Executive Parking Bays'
    ],
    amenities: [
      'Infinity Pool',
      'Smart Home Automation',
      '24/7 Security & Concierge',
      'Private Elevator',
      'Gym & Spa',
      'Wine Cellar',
      'Solar Power & Inverter',
      'Underground Parking',
      'Helipad'
    ],
    floorPlans: [
      {
        id: 'fp-penthouse-level1',
        name: 'Lower Level - Grand Living & Terrace',
        type: 'Duplex Penthouse - Level 28',
        sizeSqFt: 6200,
        sizeSqM: 576,
        bedrooms: 2,
        bathrooms: 3,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
        description: 'Featuring formal dining hall for 16 guests, open-plan reception lounge, chef kitchen, staff quarters, and expansive sky terrace with infinity pool.'
      },
      {
        id: 'fp-penthouse-level2',
        name: 'Upper Level - Presidential Suites',
        type: 'Duplex Penthouse - Level 29',
        sizeSqFt: 5300,
        sizeSqM: 492,
        bedrooms: 3,
        bathrooms: 3,
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80',
        description: 'Master sanctuary with dual walk-in dressing rooms, private balcony jacuzzi, secondary king suites, private cinema lounge, and home wellness retreat.'
      }
    ],
    paymentPlan: {
      initialDepositPercent: 20,
      milestones: [
        { stage: 'Initial Commitment Deposit', percentage: 20, description: 'Upon execution of Sale Agreement & Allocation Letter' },
        { stage: 'Structural Superstructure Completion', percentage: 30, description: 'At completion of Level 29 concrete frame & roof slab' },
        { stage: 'Façade & MEP Works', percentage: 30, description: 'At curtain wall glass installation & core services' },
        { stage: 'Final Handover & Title Transfer', percentage: 20, description: 'Upon practical completion, key handover & Governor Certificate' }
      ]
    },
    mapCoordinates: {
      lat: 6.4523,
      lng: 3.4287,
      addressString: 'Plot 1204 Kingsway Road, Ikoyi, Lagos'
    }
  },
  {
    id: 'banana-island-waterfront-haven',
    title: 'Nirvana Cove Waterfront Estate',
    tagline: 'Exclusive deep-water private jetty residence with private yacht berth.',
    priceRaw: 3500000000,
    priceDisplay: '₦3,500,000,000',
    location: 'Ocean Parade Way, Banana Island, Lagos',
    neighborhood: 'Banana Island',
    propertyType: 'Waterfront Villa',
    status: 'Ready for Move-in',
    completionDate: 'Completed 2025',
    bedrooms: 6,
    bathrooms: 7,
    areaSqFt: 14200,
    areaSqM: 1319,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Set upon the premier waterfront strip of Banana Island, Nirvana Cove is a tour de force of organic luxury architecture. Designed for discerning maritime enthusiasts, this ultra-luxurious 6-bedroom estate incorporates a private deep-water dock capable of berthing yachts up to 75 feet, serene perimeter water channels, glass-walled underwater lounge window, and seamless indoor-outdoor living.',
    architecturalStyle: 'Tropical Organic Ultra-Modern Villa',
    features: [
      'Private Private 75ft Deep-Water Yacht Dock',
      'Heated Saltwater Infinity Pool overlooking Lagos Lagoon',
      'Underwater Submerged Lounge Window into Swimming Pool',
      'Lutron Homeworks QSX Full Automation & Energy Management',
      'Private 12-Seat Dolby Atmos Cinema Room',
      'Dedicated Security Detail Outpost & CCTV Guardhouse',
      'Tri-Fuel Generator Network + 50kW Industrial Solar Microgrid'
    ],
    amenities: [
      'Private Dock',
      'Infinity Pool',
      'Smart Home Automation',
      '24/7 Security & Concierge',
      'Gym & Spa',
      'Solar Power & Inverter',
      'Underground Parking',
      'Helipad'
    ],
    floorPlans: [
      {
        id: 'fp-nirvana-ground',
        name: 'Ground Floor - Formal Entertaining',
        type: 'Detached Villa Ground Level',
        sizeSqFt: 7500,
        sizeSqM: 696,
        bedrooms: 1,
        bathrooms: 2,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
        description: 'Triple-volume foyer, water gardens, formal living, show kitchen, wet prep kitchen, guest pavilion suite, and waterfront deck.'
      },
      {
        id: 'fp-nirvana-upper',
        name: 'Upper Level - Private Family Wing',
        type: 'Detached Villa First Level',
        sizeSqFt: 6700,
        sizeSqM: 622,
        bedrooms: 5,
        bathrooms: 5,
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80',
        description: 'Presidential Master Suite with wrap-around balcony, 4 ensuite bedrooms, family lounge, study library, and yoga deck.'
      }
    ],
    paymentPlan: {
      initialDepositPercent: 30,
      milestones: [
        { stage: 'Immediate Key Delivery', percentage: 70, description: '70% Payment upon physical inspection and contract sealing' },
        { stage: 'Structured Deferred Balance', percentage: 30, description: '30% structured over 12 months in zero-interest quarterly tranches' }
      ]
    },
    mapCoordinates: {
      lat: 6.4678,
      lng: 3.4412,
      addressString: '14 Ocean Parade Boulevard, Banana Island, Ikoyi'
    }
  },
  {
    id: 'eko-atlantic-oceanfront-towers',
    title: 'The Azure Pacific Pearl Residence',
    tagline: 'High-tech smart residence directly overlooking the Atlantic Ocean in Eko Atlantic City.',
    priceRaw: 1250000000,
    priceDisplay: '₦1,250,000,000',
    location: 'Ahmadu Bello Boulevard, Eko Atlantic City, Lagos',
    neighborhood: 'Eko Atlantic',
    propertyType: 'Luxury Apartment',
    status: 'Selling Fast',
    completionDate: 'Q2 2026',
    bedrooms: 3,
    bathrooms: 4,
    areaSqFt: 4800,
    areaSqM: 446,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Situated in the heart of Africa’s modern financial hub, Eko Atlantic City, The Azure Pacific Pearl represents sustainable luxury of tomorrow. Benefiting from independent power generation, advanced clean water treatment, and zero-flood infrastructure, this 3-bedroom oceanfront apartment offers continuous sea breezes and unobstructed views across the Great Sea Wall.',
    architecturalStyle: 'Aerodynamic Glass & Steel Skyscraper',
    features: [
      'Uninterrupted 24/7 Clean City Utilities Infrastructure',
      'Frameless Hurricane-Rated Balcony Glass Railings',
      'Integrated Biometric & Facial Access Controls',
      'Custom Poggenpohl Kitchen with Calacatta Gold Quartz',
      'Olympic-Length Community Lap Pool & Private Cabanas',
      'Electric Vehicle Charging Stations in Basement'
    ],
    amenities: [
      'Smart Home Automation',
      '24/7 Security & Concierge',
      'Gym & Spa',
      'Infinity Pool',
      'Underground Parking',
      'Solar Power & Inverter'
    ],
    floorPlans: [
      {
        id: 'fp-azure-3bed',
        name: 'The Oceanfront Corner Suite',
        type: '3-Bed Luxury Residence',
        sizeSqFt: 4800,
        sizeSqM: 446,
        bedrooms: 3,
        bathrooms: 4,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
        description: 'Expansive open-plan living room facing south toward the ocean, gourmet kitchen island, dual master suites with sea views.'
      }
    ],
    paymentPlan: {
      initialDepositPercent: 15,
      milestones: [
        { stage: 'Commitment Deposit', percentage: 15, description: '15% upon reservation' },
        { stage: 'Construction Progress', percentage: 65, description: '65% spread in equal quarterly installments over 18 months' },
        { stage: 'Handover', percentage: 20, description: '20% upon key handover and title perfection' }
      ]
    },
    mapCoordinates: {
      lat: 6.4215,
      lng: 3.4112,
      addressString: 'Tower B, Oceanfront District, Eko Atlantic City, Lagos'
    }
  },
  {
    id: 'old-ikoyi-maisonette-sanctuary',
    title: 'The Queen’s Drive Heritage Maisonette',
    tagline: 'Timeless luxury meets lush tropical greenery in Old Ikoyi.',
    priceRaw: 1800000000,
    priceDisplay: '₦1,800,000,000',
    location: 'Queen’s Drive (Oyinkan Abayomi Drive), Old Ikoyi',
    neighborhood: 'Old Ikoyi',
    propertyType: 'Maisonette',
    status: 'Selling Fast',
    completionDate: 'Q3 2026',
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 6200,
    areaSqM: 576,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designed for families who appreciate privacy, space, and leafy surroundings. Set along the tranquil tree-lined Queen’s Drive in Old Ikoyi, this 4-bedroom duplex maisonette combines private garden courtyards, soaring ceilings, double staff quarters, and dedicated security infrastructure.',
    architecturalStyle: 'Neo-Classical British Colonial Modern Fusion',
    features: [
      'Private Landscaped Zen Courtyard Garden',
      'Double-Volume Living Room with Fireplace Feature',
      'Ensuite Staff Quarters for 2 Domestic Personnel',
      'Private Plunge Pool & Outdoor BBQ Pavilion',
      'Solid Teak & Marble Flooring Throughout'
    ],
    amenities: [
      'Smart Home Automation',
      '24/7 Security & Concierge',
      'Gym & Spa',
      'Solar Power & Inverter',
      'Underground Parking'
    ],
    floorPlans: [
      {
        id: 'fp-queens-maisonette',
        name: 'Duplex Layout',
        type: '4-Bed Maisonette',
        sizeSqFt: 6200,
        sizeSqM: 576,
        bedrooms: 4,
        bathrooms: 5,
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80',
        description: 'Lower level entertaining floor with living, dining and courtyard. Upper level private bedroom quarters and family lounge.'
      }
    ],
    paymentPlan: {
      initialDepositPercent: 25,
      milestones: [
        { stage: 'Deposit', percentage: 25, description: 'Initial deposit upon signing' },
        { stage: 'Milestone 1', percentage: 25, description: 'Roof slab completion' },
        { stage: 'Milestone 2', percentage: 25, description: 'Internal MEP and plastering' },
        { stage: 'Handover', percentage: 25, description: 'Final key delivery' }
      ]
    },
    mapCoordinates: {
      lat: 6.4489,
      lng: 3.4355,
      addressString: '28 Queen’s Drive (Oyinkan Abayomi Drive), Ikoyi, Lagos'
    }
  },
  {
    id: 'victoria-island-commercial-hub',
    title: 'The Aurelia Sovereign Financial Tower',
    tagline: 'Grade-A luxury commercial suites and executive sky offices.',
    priceRaw: 950000000,
    priceDisplay: '₦950,000,000',
    location: 'Ahmadu Bello Way, Victoria Island, Lagos',
    neighborhood: 'Victoria Island',
    propertyType: 'Commercial Tower',
    status: 'Off-Plan',
    completionDate: 'Q1 2027',
    bedrooms: 0,
    bathrooms: 4,
    areaSqFt: 3500,
    areaSqM: 325,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An iconic commercial monument tailored for multinational corporations, private family offices, and leading financial institutions. Located in the core corporate corridor of Victoria Island, featuring LEED Gold sustainability standards, fiber-optic backbone, and executive VIP helipad access.',
    architecturalStyle: 'Glass-Curtain Smart Commercial Tower',
    features: [
      'LEED Gold Environmental Certification',
      'High-Speed Schindler Destination Control Elevators',
      '24/7 Redundant Fiber Optic Internet & Data Vaults',
      'Executive Roof Helipad & VIP Lounge',
      'Multi-Level Automated Puzzle Parking System'
    ],
    amenities: [
      '24/7 Security & Concierge',
      'Helipad',
      'Underground Parking',
      'Solar Power & Inverter'
    ],
    floorPlans: [
      {
        id: 'fp-sovereign-floor',
        name: 'Executive Half-Floor Suite',
        type: 'Grade-A Commercial Space',
        sizeSqFt: 3500,
        sizeSqM: 325,
        bedrooms: 0,
        bathrooms: 4,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
        description: 'Open-plan workspace, boardrooms, CEO private executive suite, private kitchenette and server room.'
      }
    ],
    paymentPlan: {
      initialDepositPercent: 20,
      milestones: [
        { stage: 'Off-Plan Reservation', percentage: 20, description: '20% deposit' },
        { stage: 'Construction Phases', percentage: 60, description: '15% every 4 months over 16 months' },
        { stage: 'Completion', percentage: 20, description: '20% upon delivery' }
      ]
    },
    mapCoordinates: {
      lat: 6.4281,
      lng: 3.4219,
      addressString: 'Ahmadu Bello Way, Victoria Island, Lagos'
    }
  },
  {
    id: 'lekki-phase1-waterfront-villas',
    title: 'The Zenith Lagoon Villa',
    tagline: 'Modern waterfront living with private swimming pool & rooftop sky lounge in Lekki Phase 1.',
    priceRaw: 750000000,
    priceDisplay: '₦750,000,000',
    location: 'Admiralty Way, Lekki Phase 1, Lagos',
    neighborhood: 'Lekki Phase 1',
    propertyType: 'Waterfront Villa',
    status: 'Selling Fast',
    completionDate: 'Q3 2026',
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 5500,
    areaSqM: 510,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Exquisitely situated along the prestigious Admiralty waterfront in Lekki Phase 1. The Zenith Lagoon Villa delivers effortless modern luxury with a private rooftop sky terrace, swimming pool, soundproof home cinema, smart lighting, and direct lagoon views.',
    architecturalStyle: 'Modern Cubic Luxury Villa',
    features: [
      'Rooftop Sky Lounge with Outdoor Barbecue & Cocktail Bar',
      'Private Swimming Pool with Sun Decks',
      'Automated Smart Home Control System',
      'Fully Fitted Italian Kitchen with Wine Cooler',
      'Solar Hybrid Energy Storage System'
    ],
    amenities: [
      'Infinity Pool',
      'Smart Home Automation',
      '24/7 Security & Concierge',
      'Solar Power & Inverter',
      'Underground Parking'
    ],
    floorPlans: [
      {
        id: 'fp-zenith-villa',
        name: 'Triplex Villa Plan',
        type: '5-Bed Detached Villa',
        sizeSqFt: 5500,
        sizeSqM: 510,
        bedrooms: 5,
        bathrooms: 6,
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80',
        description: 'Ground floor living and pool deck. First level bedroom suites. Second level master suite and rooftop sky terrace.'
      }
    ],
    paymentPlan: {
      initialDepositPercent: 20,
      milestones: [
        { stage: 'Reservation', percentage: 20, description: '20% deposit' },
        { stage: 'Construction', percentage: 60, description: 'Quarterly milestones over 12 months' },
        { stage: 'Keys', percentage: 20, description: '20% upon final inspection' }
      ]
    },
    mapCoordinates: {
      lat: 6.4421,
      lng: 3.4732,
      addressString: 'Admiralty Way, Lekki Phase 1, Lagos'
    }
  },
  {
    id: 'ikoyi-bourdillon-sky-residences',
    title: 'The Aurelia Bourdillon Signature Suites',
    tagline: 'Refined 4-bedroom high-rise apartments on Bourdillon Road.',
    priceRaw: 1650000000,
    priceDisplay: '₦1,650,000,000',
    location: 'Bourdillon Road, Ikoyi, Lagos',
    neighborhood: 'Ikoyi',
    propertyType: 'Luxury Apartment',
    status: 'Ready for Move-in',
    completionDate: 'Completed 2025',
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 5800,
    areaSqM: 538,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Exclusivity redefined along Bourdillon Road. Offering sprawling single-floor living layouts with 360-degree views of Ikoyi’s canopy and the Ikoyi-Lekki Link Bridge. Completed to international standards with imported Italian sanitaryware, soundproof acoustic glazing, and private elevator foyers.',
    architecturalStyle: 'Sleek High-Rise Architectural Masterpiece',
    features: [
      'Private Keycard Elevator Foyer Entrance',
      'Floor-to-Ceiling Soundproof Acoustic Glazing',
      'Temperature-Controlled Olympic Lap Pool & Children’s Pool',
      'State-of-the-Art Wellness Gym & Tennis Court',
      'Underground Storage Rooms for Each Resident'
    ],
    amenities: [
      'Private Elevator',
      'Smart Home Automation',
      '24/7 Security & Concierge',
      'Gym & Spa',
      'Infinity Pool',
      'Underground Parking'
    ],
    floorPlans: [
      {
        id: 'fp-bourdillon-4bed',
        name: 'Single-Level Luxury Layout',
        type: '4-Bed Residence',
        sizeSqFt: 5800,
        sizeSqM: 538,
        bedrooms: 4,
        bathrooms: 5,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
        description: 'Single-floor layout with 4 ensuite rooms, grand salon, formal dining, wet/dry kitchens, and dual staff quarters.'
      }
    ],
    paymentPlan: {
      initialDepositPercent: 50,
      milestones: [
        { stage: 'Immediate Occupation', percentage: 50, description: '50% upon signing and immediate move-in' },
        { stage: 'Balance', percentage: 50, description: '50% payable within 6 months' }
      ]
    },
    mapCoordinates: {
      lat: 6.4512,
      lng: 3.4389,
      addressString: '42 Bourdillon Road, Ikoyi, Lagos'
    }
  },
  {
    id: 'banana-island-crest-villas',
    title: 'The Crest Sanctuary Villa',
    tagline: 'An architectural statement of grand proportions in Banana Island.',
    priceRaw: 3200000000,
    priceDisplay: '₦3,200,000,000',
    location: 'Close 5, Banana Island, Ikoyi, Lagos',
    neighborhood: 'Banana Island',
    propertyType: 'Waterfront Villa',
    status: 'Selling Fast',
    completionDate: 'Q4 2026',
    bedrooms: 7,
    bathrooms: 8,
    areaSqFt: 15500,
    areaSqM: 1440,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Unrivalled grandeur featuring 7 ensuite master suites, double swimming pools (indoor heated hydrotherapy pool + outdoor infinity pool), subterranean 8-car showroom garage, private bowling alley, and private garden oasis.',
    architecturalStyle: 'Modern Ultra-Luxury Estate',
    features: [
      'Subterranean 8-Car Climate-Controlled Showroom Garage',
      'Dual Swimming Pools (Indoor Heated Spa + Outdoor Infinity)',
      'Private 2-Lane Bowling Alley & Billiards Pavilion',
      'Commercial-Grade Elevator Serving 4 Levels',
      'Biometric Security Fortification System'
    ],
    amenities: [
      'Infinity Pool',
      'Smart Home Automation',
      '24/7 Security & Concierge',
      'Private Elevator',
      'Gym & Spa',
      'Wine Cellar',
      'Solar Power & Inverter',
      'Underground Parking',
      'Helipad'
    ],
    floorPlans: [
      {
        id: 'fp-crest-master',
        name: 'Grand Estate Layout',
        type: '7-Bed Detached Mega Villa',
        sizeSqFt: 15500,
        sizeSqM: 1440,
        bedrooms: 7,
        bathrooms: 8,
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80',
        description: 'Spanning 4 levels including subterranean entertainment floor, main reception level, family suite level, and penthouse master retreat.'
      }
    ],
    paymentPlan: {
      initialDepositPercent: 25,
      milestones: [
        { stage: 'Reservation', percentage: 25, description: '25% upon contract execution' },
        { stage: 'Construction Milestones', percentage: 55, description: '55% over 18 months construction period' },
        { stage: 'Handover', percentage: 20, description: '20% upon final key handover' }
      ]
    },
    mapCoordinates: {
      lat: 6.4691,
      lng: 3.4428,
      addressString: 'Close 5, Zone A, Banana Island, Ikoyi, Lagos'
    }
  }
];
