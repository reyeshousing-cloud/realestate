import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import InquiryModal from '../components/InquiryModal';
import { Search, Filter, SlidersHorizontal, RotateCcw, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filters state initialized from URL query params if present
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>(
    searchParams.get('location') || 'All'
  );
  const [selectedType, setSelectedType] = useState<string>(
    searchParams.get('type') || 'All'
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    searchParams.get('status') || 'All'
  );
  const [maxPrice, setMaxPrice] = useState<number>(4000000000); // Max 4B
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const neighborhoods = ['All', 'Banana Island', 'Ikoyi', 'Victoria Island', 'Eko Atlantic', 'Lekki Phase 1', 'Old Ikoyi'];
  const propertyTypes = ['All', 'Penthouse', 'Waterfront Villa', 'Luxury Apartment', 'Maisonette', 'Commercial Tower'];
  const statusOptions = ['All', 'Ready for Move-in', 'Selling Fast', 'Off-Plan', 'Completed'];

  // Filter logic
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesNeighborhood =
        selectedNeighborhood === 'All' || property.neighborhood === selectedNeighborhood;

      const matchesType =
        selectedType === 'All' || property.propertyType === selectedType;

      const matchesStatus =
        selectedStatus === 'All' || property.status === selectedStatus;

      const matchesPrice = property.priceRaw <= maxPrice;

      return matchesSearch && matchesNeighborhood && matchesType && matchesStatus && matchesPrice;
    });
  }, [searchTerm, selectedNeighborhood, selectedType, selectedStatus, maxPrice]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedNeighborhood('All');
    setSelectedType('All');
    setSelectedStatus('All');
    setMaxPrice(4000000000);
    setSearchParams({});
  };

  return (
    <div className="bg-[#EBF1F7] text-slate-900 min-h-screen pt-28 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <span className="text-[#B38E46] text-xs font-bold uppercase tracking-widest">
            Aurelia Signature Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
            Exquisite Residences & Commercial Developments
          </h1>
          <p className="text-slate-600 text-sm max-w-2xl font-light">
            Filter our exclusive collection of ultra-luxury residences in Lagos. Each project is crafted with unyielding precision, premium Italian finishes, and complete land title perfection.
          </p>
        </motion.div>
      </div>

      {/* Filter Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white border border-[#D2DCED] rounded-2xl p-6 shadow-xs space-y-6">
          {/* Top Search & Reset Row */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by name, address or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* Price Range Slider */}
            <div className="w-full md:w-80 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Max Budget:</span>
                <span className="font-bold text-[#B38E46]">
                  {maxPrice >= 4000000000 ? 'Any Price (Up to ₦4B+)' : `₦${(maxPrice / 1000000000).toFixed(2)} Billion`}
                </span>
              </div>
              <input
                type="range"
                min={500000000}
                max={4000000000}
                step={100000000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors self-end md:self-center"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Reset Filters</span>
            </button>
          </div>

          {/* Category Quick Pills */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            {/* Neighborhood Pill Selector */}
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Prime Location / Neighborhood:
              </span>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedNeighborhood(loc)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      selectedNeighborhood === loc
                        ? 'bg-[#C5A059] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Property Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#C5A059]"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Development Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#C5A059]"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between text-xs text-slate-500">
        <p>
          Showing <span className="text-slate-900 font-bold">{filteredProperties.length}</span> of {properties.length} luxury residences
        </p>

        {selectedNeighborhood !== 'All' && (
          <span className="px-2.5 py-1 rounded bg-[#C5A059]/20 text-[#B38E46] border border-[#C5A059]/30 font-semibold">
            Filtered by: {selectedNeighborhood}
          </span>
        )}
      </div>

      {/* Property Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onQuickInquire={() => setInquiryModalOpen(true)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-[#EAE3D2] rounded-2xl p-8 max-w-lg mx-auto shadow-xs">
            <Building2 className="w-12 h-12 text-[#C5A059] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-bold text-slate-900">No Properties Matched Your Criteria</h3>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              We couldn't find any properties matching your current search parameters. Try expanding your price range or clearing neighborhood filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 px-6 py-2.5 bg-[#C5A059] text-white font-semibold text-xs rounded-xl hover:bg-[#b58f48] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </div>
  );
}
