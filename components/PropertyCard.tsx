import React from 'react';
import { Property, ListingType } from '../types';
import { MapPin, Bed, Bath, Move, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/property/${property.id}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
          {property.type}
        </div>
        <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm ${property.status === ListingType.SALE ? 'bg-secondary text-white' : 'bg-green-600 text-white'}`}>
          {property.status}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
        <div className="absolute bottom-4 right-4 text-white text-xl font-bold font-serif">
          {formatPrice(property.price)}
          {property.status === ListingType.RENT && <span className="text-sm font-sans font-normal">/mo</span>}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1 text-secondary" />
          <span className="truncate">{property.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 mt-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center text-gray-700 font-semibold">
              <Bed size={18} className="mr-1.5 text-gray-400" />
              {property.bedrooms}
            </div>
            <span className="text-xs text-gray-500 mt-0.5">Beds</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center border-l border-r border-gray-100">
            <div className="flex items-center text-gray-700 font-semibold">
              <Bath size={18} className="mr-1.5 text-gray-400" />
              {property.bathrooms}
            </div>
            <span className="text-xs text-gray-500 mt-0.5">Baths</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center text-gray-700 font-semibold">
              <Move size={18} className="mr-1.5 text-gray-400" />
              {property.sqft}
            </div>
            <span className="text-xs text-gray-500 mt-0.5">Sq Ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
