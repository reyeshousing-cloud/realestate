import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { Bookmark, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PropertyCardProps {
  key?: string;
  property: Property;
  onQuickInquire?: (property: Property) => void;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image Block */}
      <div className="relative h-56 sm:h-64 w-full rounded-[1.5rem] overflow-hidden bg-slate-100 mb-4">
        <img
          src={property.heroImage}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200/50 shadow-2xs">
            {property.propertyType}
          </span>
        </div>

        {/* Bookmark button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setBookmarked(!bookmarked);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all ${
            bookmarked 
              ? 'bg-slate-950 text-white shadow-sm' 
              : 'bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 shadow-2xs'
          }`}
          aria-label="Bookmark property"
        >
          <Bookmark className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Card Content */}
      <div className="px-2 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-1 text-slate-400 text-xs mb-1 font-normal">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <Link to={`/properties/${property.id}`} className="block group-hover:text-slate-700 transition-colors">
            <h3 className="font-sans text-lg font-semibold text-slate-950 leading-snug line-clamp-1">
              {property.title}
            </h3>
          </Link>
        </div>

        {/* Specs horizontal Row */}
        <div className="flex items-center gap-4 text-slate-600 text-xs font-medium pt-1">
          {property.bedrooms > 0 && (
            <div>
              <span className="font-bold text-slate-950 text-sm mr-1">{property.bedrooms}</span>
              <span className="text-slate-400 font-normal">beds</span>
            </div>
          )}

          <div>
            <span className="font-bold text-slate-950 text-sm mr-1">{property.bathrooms}</span>
            <span className="text-slate-400 font-normal">baths</span>
          </div>

          <div>
            <span className="font-bold text-slate-950 text-sm mr-1">{property.areaSqFt.toLocaleString()}</span>
            <span className="text-slate-400 font-normal">sqft</span>
          </div>
        </div>

        {/* Bottom Price & View Detail Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <span className="font-sans font-bold text-lg sm:text-xl text-slate-950 tracking-tight">
            {property.priceDisplay}
          </span>

          <Link
            to={`/properties/${property.id}`}
            className="p-2.5 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-950 hover:text-white text-slate-700 transition-all shadow-2xs"
            aria-label="View property details"
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

