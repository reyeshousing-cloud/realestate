import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import { Property } from '../types';
import InquiryModal from '../components/InquiryModal';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PropertyCard from '../components/PropertyCard';
import {
  MapPin, Bed, Bath, Maximize2, ShieldCheck, Calendar, CheckCircle2,
  Phone, MessageCircle, ChevronLeft, ChevronRight, Layers, FileText,
  Calculator, Sparkles, Building, Info, Share2, Compass
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const property: Property | undefined = properties.find((p) => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeFloorPlanIndex, setActiveFloorPlanIndex] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Mortgage / Payment Calculator State
  const [customDepositPercent, setCustomDepositPercent] = useState<number>(20);
  const [tenureMonths, setTenureMonths] = useState<number>(18);

  useEffect(() => {
    setActiveImageIndex(0);
    setActiveFloorPlanIndex(0);
    if (property) {
      setCustomDepositPercent(property.paymentPlan.initialDepositPercent);
    }
  }, [id, property]);

  if (!property) {
    return (
      <div className="bg-[#EBF1F7] text-slate-900 min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md px-4">
          <Building className="w-16 h-16 text-[#C5A059] mx-auto opacity-60" />
          <h2 className="font-serif text-2xl font-bold">Property Not Found</h2>
          <p className="text-slate-600 text-xs">
            The property you are looking for does not exist or has been removed from public listing.
          </p>
          <Link
            to="/properties"
            className="inline-block px-6 py-2.5 bg-[#C5A059] text-white font-semibold text-xs rounded-xl"
          >
            Back to Properties Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Calculate payment numbers
  const initialDepositAmount = (property.priceRaw * customDepositPercent) / 100;
  const remainingBalance = property.priceRaw - initialDepositAmount;
  const monthlyInstallment = tenureMonths > 0 ? remainingBalance / tenureMonths : 0;

  const whatsappMessage = `Hi, I'm interested in ${property.title}. Please send me the comprehensive brochure and schedule a private viewing.`;
  const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(whatsappMessage)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const similarProperties = properties
    .filter((p) => p.id !== property.id && (p.neighborhood === property.neighborhood || p.propertyType === property.propertyType))
    .slice(0, 3);

  return (
    <div className="bg-[#EBF1F7] text-slate-900 min-h-screen pt-24 pb-20">
      <FloatingWhatsApp propertyName={property.title} />

      {/* Breadcrumb & Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-slate-900 transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-[#B38E46] font-bold truncate max-w-xs">{property.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Property'}</span>
            </button>

            <button
              onClick={() => navigate('/properties')}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Property Hero & Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-4">
          {/* Main Active Image Box */}
          <div className="relative h-[400px] sm:h-[520px] w-full rounded-2xl overflow-hidden border border-[#D2DCED] shadow-lg bg-slate-900 group">
            <img
              src={property.galleryImages[activeImageIndex] || property.heroImage}
              alt={`${property.title} - View ${activeImageIndex + 1}`}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            {/* Gallery Navigation Arrows */}
            <button
              onClick={() =>
                setActiveImageIndex((prev) => (prev - 1 + property.galleryImages.length) % property.galleryImages.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-[#C5A059] text-slate-900 hover:text-white rounded-full backdrop-blur-md transition-colors shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                setActiveImageIndex((prev) => (prev + 1) % property.galleryImages.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-[#C5A059] text-slate-900 hover:text-white rounded-full backdrop-blur-md transition-colors shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Title & Status Badge inside Hero Image Bottom */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#C5A059] text-white text-xs font-bold uppercase rounded-full tracking-wider shadow-xs">
                    {property.status}
                  </span>
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium border border-white/20 rounded-full">
                    {property.propertyType}
                  </span>
                </div>
                <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white drop-shadow-md">
                  {property.title}
                </h1>
                <p className="flex items-center gap-1.5 text-slate-200 text-xs mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>{property.location}</span>
                </p>
              </div>

              {/* Price Display */}
              <div className="bg-white/95 border border-[#D2DCED] backdrop-blur-md px-6 py-3 rounded-2xl shadow-md">
                <span className="text-[10px] uppercase tracking-widest text-[#B38E46] font-bold block">Listing Price</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">{property.priceDisplay}</span>
              </div>
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {property.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIndex === idx ? 'border-[#C5A059] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout (Left Specs & Description + Right Action Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: Main Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Key Quick Stats Bar */}
          <div className="bg-white border border-[#D2DCED] rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center shadow-xs">
            {property.bedrooms > 0 && (
              <div className="space-y-1">
                <Bed className="w-5 h-5 text-[#C5A059] mx-auto" />
                <span className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold block">Bedrooms</span>
                <span className="text-slate-900 font-bold text-lg">{property.bedrooms} Suites</span>
              </div>
            )}
            <div className="space-y-1">
              <Bath className="w-5 h-5 text-[#C5A059] mx-auto" />
              <span className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold block">Bathrooms</span>
              <span className="text-slate-900 font-bold text-lg">{property.bathrooms} Baths</span>
            </div>
            <div className="space-y-1">
              <Maximize2 className="w-5 h-5 text-[#C5A059] mx-auto" />
              <span className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold block">Area Size</span>
              <span className="text-slate-900 font-bold text-lg">{property.areaSqFt.toLocaleString()} sq ft</span>
            </div>
            <div className="space-y-1">
              <Calendar className="w-5 h-5 text-[#C5A059] mx-auto" />
              <span className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold block">Completion</span>
              <span className="text-slate-900 font-bold text-lg">{property.completionDate}</span>
            </div>
          </div>

          {/* Overview & Description */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-slate-900 border-b border-[#D2DCED] pb-3">
              Architectural Overview
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed font-light whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-[#D2DCED] pb-3">
              Bespoke Design Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-white border border-[#D2DCED] rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-xs leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resort-Style Amenities Grid */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-[#D2DCED] pb-3">
              World-Class Amenities & Services
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="p-3 bg-white border border-[#D2DCED] rounded-xl flex items-center gap-2.5 text-xs text-slate-800 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floor Plans Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-[#D2DCED] pb-3">
              Architectural Floor Plans
            </h3>

            {/* Floor Plan Tab Selectors */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {property.floorPlans.map((fp, idx) => (
                <button
                  key={fp.id}
                  onClick={() => setActiveFloorPlanIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    activeFloorPlanIndex === idx
                      ? 'bg-[#C5A059] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {fp.name}
                </button>
              ))}
            </div>

            {/* Active Floor Plan Card */}
            {property.floorPlans[activeFloorPlanIndex] && (
              <div className="bg-white border border-[#D2DCED] rounded-2xl p-6 space-y-4 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-slate-900">
                      {property.floorPlans[activeFloorPlanIndex].name}
                    </h4>
                    <p className="text-slate-500 font-medium">{property.floorPlans[activeFloorPlanIndex].type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[#B38E46] font-bold text-base">
                      {property.floorPlans[activeFloorPlanIndex].sizeSqFt.toLocaleString()} sq ft
                    </span>
                    <span className="text-slate-500 block text-[11px]">
                      ({property.floorPlans[activeFloorPlanIndex].sizeSqM} sq meters)
                    </span>
                  </div>
                </div>

                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src={property.floorPlans[activeFloorPlanIndex].image}
                    alt={property.floorPlans[activeFloorPlanIndex].name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] text-white bg-slate-900/80 px-3 py-1 rounded-lg backdrop-blur-md">
                    Architectural Layout Plan
                  </div>
                </div>

                <p className="text-slate-700 text-xs leading-relaxed">
                  {property.floorPlans[activeFloorPlanIndex].description}
                </p>
              </div>
            )}
          </div>

          {/* Interactive Payment Plan & Calculator */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-[#D2DCED] pb-3 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#C5A059]" />
              <span>Payment Structure & Schedule Calculator</span>
            </h3>

            <div className="bg-white border border-[#D2DCED] rounded-2xl p-6 space-y-6 shadow-xs">
              {/* Milestone Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#B38E46] uppercase tracking-wider">
                  Standard Construction Payment Milestones
                </h4>
                <div className="space-y-2">
                  {property.paymentPlan.milestones.map((milestone, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-900 font-bold block">{milestone.stage}</span>
                        <span className="text-slate-500 text-[11px]">{milestone.description}</span>
                      </div>
                      <span className="text-[#B38E46] font-bold text-sm shrink-0 ml-3">
                        {milestone.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculator Controls */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Custom Investment Installment Estimator
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-slate-600 font-medium mb-1">
                      Initial Commitment Deposit (%): <span className="text-slate-900 font-bold">{customDepositPercent}%</span>
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      step={5}
                      value={customDepositPercent}
                      onChange={(e) => setCustomDepositPercent(Number(e.target.value))}
                      className="w-full accent-[#C5A059] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 font-medium mb-1">
                      Construction Tenure: <span className="text-slate-900 font-bold">{tenureMonths} Months</span>
                    </label>
                    <select
                      value={tenureMonths}
                      onChange={(e) => setTenureMonths(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs text-slate-900 focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value={6}>6 Months Structured</option>
                      <option value={12}>12 Months Structured</option>
                      <option value={18}>18 Months Structured</option>
                      <option value={24}>24 Months Structured</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Initial Deposit</span>
                    <span className="text-slate-900 font-bold text-sm">₦{initialDepositAmount.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Remaining Balance</span>
                    <span className="text-slate-700 font-bold text-sm">₦{remainingBalance.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#B38E46] uppercase tracking-wider font-bold block">Est. Monthly Tranche</span>
                    <span className="text-[#B38E46] font-bold text-sm">₦{Math.round(monthlyInstallment).toLocaleString()} / mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Map Placeholder */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-[#D2DCED] pb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#C5A059]" />
              <span>Prime Location & Neighborhood</span>
            </h3>

            <div className="bg-white border border-[#D2DCED] rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{property.mapCoordinates.addressString}</span>
              </div>

              {/* Interactive Map Box Placeholder */}
              <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                {/* Stylized vector map pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 text-center p-6 space-y-2 max-w-sm">
                  <div className="w-12 h-12 bg-[#C5A059]/10 text-[#B38E46] border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-slate-900">{property.title}</h4>
                  <p className="text-slate-500 text-xs">{property.mapCoordinates.addressString}</p>
                  <a
                    href={`https://maps.google.com/?q=${property.mapCoordinates.lat},${property.mapCoordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-1.5 bg-slate-100 hover:bg-[#C5A059] text-slate-800 hover:text-white text-xs font-semibold rounded-lg transition-colors border border-slate-300"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sticky Call To Action Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-28 bg-white border border-[#D2DCED] rounded-2xl p-6 shadow-sm space-y-6">
            
            <div className="space-y-1 text-center border-b border-slate-100 pb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#B38E46] font-bold">
                Direct Developer Sales
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">{property.priceDisplay}</h3>
              <p className="text-slate-500 text-xs">{property.status} • {property.completionDate}</p>
            </div>

            {/* Prominent WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-102"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>Chat on WhatsApp Now</span>
            </a>

            {/* Schedule Viewing CTA Button */}
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b58f48] hover:to-[#c5a059] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-300"
            >
              Schedule Private Viewing
            </button>

            {/* Direct Phone Call */}
            <a
              href="tel:+2348123456789"
              className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call Advisory Desk (+234 812 345 6789)</span>
            </a>

            {/* Developer Trust Guarantees */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Clean Governor’s Consent Title Included</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Zero Buyers Commission (Direct Developer)</span>
              </div>
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Customized Structural Modifications Allowed</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Similar Recommended Residences */}
      {similarProperties.length > 0 && (
        <section className="mt-20 pt-16 border-t border-[#D2DCED] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#B38E46] text-xs font-bold uppercase tracking-widest">
              Similar Residences
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
              You May Also Consider
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      )}

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        propertyTitle={property.title}
      />
    </div>
  );
}
