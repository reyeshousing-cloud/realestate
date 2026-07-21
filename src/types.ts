export interface FloorPlan {
  id: string;
  name: string;
  type: string;
  sizeSqFt: number;
  sizeSqM: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  description: string;
}

export interface PaymentMilestone {
  stage: string;
  percentage: number;
  description: string;
}

export interface Property {
  id: string;
  title: string;
  tagline: string;
  priceRaw: number; // For filtering
  priceDisplay: string; // e.g. "₦850,000,000"
  location: string; // e.g. "Banana Island, Ikoyi"
  neighborhood: 'Banana Island' | 'Ikoyi' | 'Victoria Island' | 'Eko Atlantic' | 'Lekki Phase 1' | 'Old Ikoyi';
  propertyType: 'Penthouse' | 'Waterfront Villa' | 'Luxury Apartment' | 'Maisonette' | 'Commercial Tower';
  status: 'Ready for Move-in' | 'Selling Fast' | 'Off-Plan' | 'Completed';
  completionDate: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  areaSqM: number;
  featured: boolean;
  heroImage: string;
  galleryImages: string[];
  description: string;
  architecturalStyle: string;
  features: string[];
  amenities: string[];
  floorPlans: FloorPlan[];
  paymentPlan: {
    initialDepositPercent: number;
    milestones: PaymentMilestone[];
  };
  mapCoordinates: {
    lat: number;
    lng: number;
    addressString: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  propertyPurchased: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface CompanyStat {
  label: string;
  value: string;
  subtext: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
}
