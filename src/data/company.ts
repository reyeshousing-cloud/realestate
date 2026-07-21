import { Testimonial, CompanyStat, TeamMember, Award } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Chief Tunde Balogun',
    clientRole: 'Private Equity Investor & Chairman',
    propertyPurchased: 'The Grand Aurelia Royal Penthouse, Ikoyi',
    quote: 'Aurelia Developments delivered beyond my highest expectations. The architectural finesse, acoustic privacy, and attention to detail in the penthouse finishings match the finest residences in Mayfair and Manhattan.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    clientName: 'Dr. Amina Al-Hassan',
    clientRole: 'Tech Founder & Angel Investor',
    propertyPurchased: 'Nirvana Cove Waterfront Estate, Banana Island',
    quote: 'Living right on the water in Banana Island with my private yacht dock has transformed our family lifestyle. The off-grid solar microgrid and round-the-clock concierge service give complete peace of mind.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    clientName: 'Julian & Claire Vane',
    clientRole: 'International Finance Executives',
    propertyPurchased: 'The Azure Pacific Pearl, Eko Atlantic',
    quote: 'As expatriates investing in West Africa, structural integrity and title perfection were paramount. Aurelia guided us seamlessly through Governor’s consent and delivered our oceanfront suite right on schedule.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5
  }
];

export const companyStats: CompanyStat[] = [
  {
    label: 'Years of Excellence',
    value: '18+',
    subtext: 'Pioneering luxury real estate in West Africa'
  },
  {
    label: 'Units Delivered',
    value: '420+',
    subtext: 'Bespoke residences and ultra-prime penthouses'
  },
  {
    label: 'Completed Projects',
    value: '24',
    subtext: 'Iconic developments across Ikoyi, VI & Eko Atlantic'
  },
  {
    label: 'Portfolio Value',
    value: '₦320B+',
    subtext: 'In developed assets and prime land banks'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Oluwaseun Adeyemi',
    role: 'Founder & Managing Director',
    bio: 'Former senior director at Foster + Partners London with 22 years of global luxury real estate development experience.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    linkedin: '#'
  },
  {
    id: 'team-2',
    name: 'Victoria Nwosu',
    role: 'Chief Architect & Head of Design',
    bio: 'Award-winning architect specializing in sustainable tropical luxury, high-rise facades, and smart home integration.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    linkedin: '#'
  },
  {
    id: 'team-3',
    name: 'Tariq Al-Mansoor',
    role: 'Chief Operations Officer',
    bio: 'Expert in mega-structure engineering, supply chain logistics, and quality assurance for ultra-high-net-worth developments.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    linkedin: '#'
  },
  {
    id: 'team-4',
    name: 'Folake Kuti',
    role: 'Head of Client Relations & Private Wealth',
    bio: 'Dedicated relationship manager delivering discrete advisory services for private investors, family offices, and foreign diplomats.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    linkedin: '#'
  }
];

export const awards: Award[] = [
  {
    year: '2025',
    title: 'Best Ultra-Luxury Residential Developer in West Africa',
    organization: 'African Property & Infrastructure Awards, Dubai'
  },
  {
    year: '2024',
    title: 'Excellence in Sustainable Architectural Innovation',
    organization: 'International Real Estate Federation (FIABCI)'
  },
  {
    year: '2023',
    title: 'Iconic Penthouse Architecture Award - The Grand Aurelia',
    organization: 'Luxury Living Design Summit, Cape Town'
  },
  {
    year: '2022',
    title: 'Developer of the Year (Prime Residential Category)',
    organization: 'Nigerian Real Estate Developers Association'
  }
];
