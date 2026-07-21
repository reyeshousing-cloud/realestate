import { useState } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import InquiryModal from '../components/InquiryModal';
import { MapPin, Building, DollarSign, Maximize2, SlidersHorizontal, Search, Bookmark, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('San Jose, CA');
  const [selectedType, setSelectedType] = useState('Apartments');
  const [selectedPrice, setSelectedPrice] = useState('$2,000–$13,000');
  const [selectedBeds, setSelectedBeds] = useState('3–5');

  const featuredProperties = properties.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-[#FFF6EE] via-[#F3F7FA] to-[#E2EEF8] text-slate-900 min-h-screen pt-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-sans font-normal text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.12]">
            Real estate for living and investments
          </h1>
        </motion.div>

        {/* Hero Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: Featured House Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 relative rounded-[2rem] overflow-hidden shadow-sm min-h-[380px] sm:min-h-[480px] bg-slate-100 group"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90"
              alt="Modern Villa Architecture"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
          </motion.div>

          {/* RIGHT: Featured Property Overview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 bg-white rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between border border-slate-100 shadow-sm space-y-6"
          >
            {/* Top Row: Address + Bookmark */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-sans font-medium text-slate-900 text-sm sm:text-base leading-snug">
                  201 Prague Dr.
                </h3>
                <p className="text-slate-500 text-xs font-normal">
                  San Jose, CA 95119
                </p>
              </div>

              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2 rounded-full transition-colors ${
                  bookmarked ? 'bg-slate-950 text-white' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-label="Bookmark property"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Stats Horizontal Row */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100/80 text-center">
              <div>
                <span className="block font-sans font-bold text-slate-950 text-xl sm:text-2xl">4</span>
                <span className="text-[11px] text-slate-400 font-medium">beds</span>
              </div>
              <div>
                <span className="block font-sans font-bold text-slate-950 text-xl sm:text-2xl">3</span>
                <span className="text-[11px] text-slate-400 font-medium">baths</span>
              </div>
              <div>
                <span className="block font-sans font-bold text-slate-950 text-xl sm:text-2xl">1,868</span>
                <span className="text-[11px] text-slate-400 font-medium">sqft</span>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-sans font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                $1,650,000
              </span>

              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-medium flex items-center gap-1 transition-all"
              >
                <span>Split options</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Agent Info Row */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Agent Amelia Stephenson"
                  className="w-10 h-10 rounded-full object-cover border border-slate-100"
                />
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal leading-none uppercase tracking-wider">Agent</span>
                  <span className="font-medium text-xs text-slate-900 block mt-0.5">Amelia Stephenson</span>
                </div>
              </div>

              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-4 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-medium hover:bg-slate-50 transition-all"
              >
                Contact
              </button>
            </div>

            {/* Request a tour CTA */}
            <div className="pt-2">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white rounded-full text-center transition-all duration-200 shadow-md group"
              >
                <span className="font-medium text-xs sm:text-sm block">Request a tour</span>
                <span className="text-[10px] text-slate-400 font-normal block -mt-0.5">Earliest at 11:00 tomorrow</span>
              </button>
            </div>

          </motion.div>

        </div>

        {/* FLOATING FILTER BAR WIDGET */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 bg-white/95 backdrop-blur-xl rounded-2xl lg:rounded-full p-2.5 sm:p-3 shadow-xl border border-slate-200/80 flex flex-wrap lg:flex-nowrap items-center justify-between gap-3"
        >
          {/* Location */}
          <div className="flex-1 min-w-[140px] px-4 py-2 bg-slate-50/80 hover:bg-slate-100/80 rounded-xl lg:rounded-full border border-slate-100 transition-all cursor-pointer">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider leading-none">Location</span>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-transparent font-semibold text-xs text-slate-900 border-none outline-none p-0 cursor-pointer w-full mt-0.5"
                >
                  <option value="San Jose, CA">San Jose, CA</option>
                  <option value="Ikoyi, Lagos">Ikoyi, Lagos</option>
                  <option value="Banana Island">Banana Island</option>
                  <option value="Eko Atlantic">Eko Atlantic</option>
                </select>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="flex-1 min-w-[140px] px-4 py-2 bg-slate-50/80 hover:bg-slate-100/80 rounded-xl lg:rounded-full border border-slate-100 transition-all cursor-pointer">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider leading-none">Property type</span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-transparent font-semibold text-xs text-slate-900 border-none outline-none p-0 cursor-pointer w-full mt-0.5"
                >
                  <option value="Apartments">Apartments</option>
                  <option value="Penthouses">Penthouses</option>
                  <option value="Villas">Villas</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex-1 min-w-[140px] px-4 py-2 bg-slate-50/80 hover:bg-slate-100/80 rounded-xl lg:rounded-full border border-slate-100 transition-all cursor-pointer">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider leading-none">Price</span>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="bg-transparent font-semibold text-xs text-slate-900 border-none outline-none p-0 cursor-pointer w-full mt-0.5"
                >
                  <option value="$2,000–$13,000">$2,000–$13,000</option>
                  <option value="$500,000–$2,000,000">$500,000–$2,000,000</option>
                  <option value="$2,000,000+">$2,000,000+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="flex-1 min-w-[120px] px-4 py-2 bg-slate-50/80 hover:bg-slate-100/80 rounded-xl lg:rounded-full border border-slate-100 transition-all cursor-pointer">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider leading-none">Bedrooms</span>
                <select
                  value={selectedBeds}
                  onChange={(e) => setSelectedBeds(e.target.value)}
                  className="bg-transparent font-semibold text-xs text-slate-900 border-none outline-none p-0 cursor-pointer w-full mt-0.5"
                >
                  <option value="3–5">3–5</option>
                  <option value="1–2">1–2</option>
                  <option value="5+">5+</option>
                </select>
              </div>
            </div>
          </div>

          {/* More Filters button */}
          <button
            onClick={() => setInquiryModalOpen(true)}
            className="p-3 rounded-full border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-all"
            aria-label="More filters"
          >
            <SlidersHorizontal className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">More</span>
          </button>

          {/* Search Button */}
          <Link
            to="/properties"
            className="px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs rounded-full shadow-md flex items-center justify-center gap-2 transition-all shrink-0"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </Link>

        </motion.div>

      </section>

      {/* LATEST IN YOUR AREA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-sans font-normal text-2xl sm:text-4xl text-slate-950 tracking-tight">
            Latest in your area
          </h2>

          <Link
            to="/properties"
            className="px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300 bg-white/80 hover:bg-white text-slate-700 text-xs font-medium flex items-center gap-1 shadow-2xs transition-all"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onQuickInquire={() => setInquiryModalOpen(true)}
            />
          ))}
        </div>
      </section>

      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </div>
  );
}

