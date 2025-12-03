import React, { useState } from 'react';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { Filter, ChevronDown } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(5000000);
  
  const filteredProperties = PROPERTIES.filter(prop => {
    return (filterType === 'All' || prop.type === filterType) && 
           prop.price <= priceRange;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Properties For Sale</h1>
          <p className="text-gray-500 mt-2">Discover our extensive list of curated properties.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-28">
              <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold text-lg pb-4 border-b border-gray-100">
                <Filter size={20} className="text-primary" />
                Filters
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  >
                    <option value="All">All Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price: <span className="text-primary font-bold">${(priceRange / 1000).toFixed(0)}k</span>
                  </label>
                  <input 
                    type="range" 
                    min="100000" 
                    max="5000000" 
                    step="50000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$100k</span>
                    <span>$5M+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, '5+'].map((num) => (
                      <button 
                        key={num}
                        className="flex-1 py-2 text-sm border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:bg-blue-50"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 text-sm">Showing <span className="font-bold text-gray-900">{filteredProperties.length}</span> results</span>
              <div className="relative">
                <select className="appearance-none pl-4 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary cursor-pointer">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Properties Found</h3>
                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setFilterType('All'); setPriceRange(5000000); }}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
            
            {/* Pagination Mock */}
            {filteredProperties.length > 0 && (
              <div className="mt-12 flex justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white shadow-md">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors">3</button>
                <span className="flex items-end px-2 text-gray-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors">8</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
