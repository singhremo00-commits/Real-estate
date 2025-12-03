import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import Button from '../components/Button';
import { MapPin, Bed, Bath, Move, Phone, Mail, CheckCircle, Calendar, Share2, Heart, Star } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImage, setActiveImage] = useState(0);

  const property = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
        <Link to="/properties">
          <Button>Back to Listings</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/properties" className="hover:text-primary">Properties</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium truncate">{property.title}</span>
        </div>

        {/* Title Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">{property.type}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{property.status}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-500">
              <MapPin size={18} className="mr-2 text-secondary" />
              {property.address}
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary mb-2">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(property.price)}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
                <Share2 size={18} />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0 flex items-center justify-center text-red-500 border-red-200 hover:bg-red-50">
                <Heart size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8 h-[500px]">
          <div className="lg:col-span-8 h-full">
            <img 
              src={property.images[activeImage]} 
              alt="Main View" 
              className="w-full h-full object-cover rounded-xl shadow-lg cursor-pointer"
            />
          </div>
          <div className="hidden lg:grid lg:col-span-4 grid-rows-3 gap-4 h-full">
            {property.images.slice(0, 3).map((img, idx) => (
              <img 
                key={idx}
                src={img}
                onClick={() => setActiveImage(idx)}
                alt={`View ${idx + 1}`}
                className={`w-full h-full object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity ${activeImage === idx ? 'ring-2 ring-primary' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Stats */}
            <div className="bg-gray-50 p-6 rounded-xl flex justify-between mb-8 border border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center text-gray-900 font-bold text-xl mb-1">
                  <Bed className="mr-2 text-secondary" /> {property.bedrooms}
                </div>
                <div className="text-sm text-gray-500">Bedrooms</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="flex items-center justify-center text-gray-900 font-bold text-xl mb-1">
                  <Bath className="mr-2 text-secondary" /> {property.bathrooms}
                </div>
                <div className="text-sm text-gray-500">Bathrooms</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="flex items-center justify-center text-gray-900 font-bold text-xl mb-1">
                  <Move className="mr-2 text-secondary" /> {property.sqft}
                </div>
                <div className="text-sm text-gray-500">Sq Ft</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
              <div className="flex gap-8">
                {['Overview', 'Features', 'Location'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`pb-4 text-sm font-bold uppercase tracking-wide transition-colors ${
                      activeTab === tab.toLowerCase() 
                        ? 'text-primary border-b-2 border-primary' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              {activeTab === 'overview' && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Property Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {property.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={18} className="text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                  <div className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle size={18} className="text-green-500 mr-2" />
                    Central Heating
                  </div>
                  <div className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle size={18} className="text-green-500 mr-2" />
                    Air Conditioning
                  </div>
                  <div className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle size={18} className="text-green-500 mr-2" />
                    Garage
                  </div>
                </div>
              )}

              {activeTab === 'location' && (
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center animate-fade-in">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                    <p>Map Integration Placeholder</p>
                    <p className="text-sm">{property.address}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Agent Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-28">
              <h3 className="text-lg font-bold mb-4">Contact Agent</h3>
              <div className="flex items-center mb-6">
                <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-primary" />
                <div>
                  <h4 className="font-bold text-gray-900">{property.agent.name}</h4>
                  <div className="text-sm text-gray-500">Senior Real Estate Agent</div>
                  <div className="flex items-center text-secondary text-xs mt-1">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <span className="ml-1 text-gray-400">(24 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <Button fullWidth variant="primary" className="flex items-center justify-center gap-2">
                  <Phone size={18} /> {property.agent.phone}
                </Button>
                <Button fullWidth variant="outline" className="flex items-center justify-center gap-2">
                  <Mail size={18} /> Send Message
                </Button>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-bold text-sm mb-4">Schedule a Tour</h4>
                <div className="space-y-3">
                  <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
                  <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
                  <input type="tel" placeholder="Your Phone" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" />
                  <Button fullWidth variant="secondary">Request Booking</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;