import React from 'react';
import { User, Settings, Home, Heart, LogOut } from 'lucide-react';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Dashboard: React.FC = () => {
  const myProperties = PROPERTIES.slice(0, 2);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">My Dashboard</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Nav */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                   <img src="https://picsum.photos/id/64/200/200" alt="User" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg">Alex Johnson</h3>
                <p className="text-gray-500 text-sm">Property Owner</p>
              </div>
              <nav className="p-2">
                <a href="#" className="flex items-center p-3 text-primary bg-blue-50 rounded-lg font-medium mb-1">
                  <Home size={20} className="mr-3" /> My Properties
                </a>
                <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mb-1">
                  <Heart size={20} className="mr-3" /> Favorites
                </a>
                <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mb-1">
                  <User size={20} className="mr-3" /> Profile
                </a>
                <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mb-1">
                  <Settings size={20} className="mr-3" /> Settings
                </a>
                <div className="border-t border-gray-100 my-2"></div>
                <a href="#" className="flex items-center p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <LogOut size={20} className="mr-3" /> Log Out
                </a>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Listed Properties</h2>
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition-colors">
                  + Add New Property
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myProperties.map(property => (
                   <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>

             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-4">Recent Messages</h2>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">JS</div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold text-sm">John Smith</h4>
                      <span className="text-xs text-gray-400">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-600">I'm interested in the Downtown Penthouse. Is it available for a viewing this weekend?</p>
                  </div>
                </div>
                 <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">EM</div>
                  <div>
                     <div className="flex justify-between mb-1">
                      <h4 className="font-bold text-sm">Emily Miller</h4>
                      <span className="text-xs text-gray-400">Yesterday</span>
                    </div>
                    <p className="text-sm text-gray-600">Could you send more photos of the kitchen area for the Villa listing?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
