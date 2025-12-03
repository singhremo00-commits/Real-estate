import React from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES, TESTIMONIALS } from '../constants';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import { Search, ArrowRight, Shield, TrendingUp, Users, Star } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProperties = PROPERTIES.filter(p => p.featured).slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Find Your Dream Home <br />
            <span className="text-secondary">Without the Stress</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Browse our exclusive listings of luxury homes, apartments, and villas. 
            We provide verified listings and seamless buying experiences.
          </p>

          <div className="bg-white p-4 rounded-xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="City, Neighborhood, or Zip Code" 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:w-1/3">
              <select className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none">
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
              <select className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
              </select>
            </div>
            <div className="md:w-auto">
              <Button fullWidth size="lg">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-500 max-w-xl">Hand-picked properties by our expert agents. These listings offer exceptional value and exclusive features.</p>
          </div>
          <Link to="/properties" className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors">
            View All Properties <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/properties">
            <Button variant="outline">View All Properties</Button>
          </Link>
        </div>
      </section>

      {/* Services/Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Redefining Real Estate</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Listings</h3>
              <p className="text-gray-500 leading-relaxed">Every property is verified by our team to ensure you get exactly what you see online.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-amber-100 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Market Insights</h3>
              <p className="text-gray-500 leading-relaxed">Get detailed market analysis and trends to make informed investment decisions.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Agents</h3>
              <p className="text-gray-500 leading-relaxed">Our agents are top-rated professionals dedicated to finding your perfect match.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">1500+</div>
              <div className="text-blue-200">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">500+</div>
              <div className="text-blue-200">Expert Agents</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">25+</div>
              <div className="text-blue-200">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Client Testimonials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-md relative">
                <div className="absolute -top-6 left-8 bg-secondary text-white p-3 rounded-full">
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <span className="text-xs text-primary uppercase font-semibold">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-dark rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80')] bg-cover bg-center"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-gray-300 mb-8 text-lg">Join thousands of satisfied customers who found their perfect property with EstatePrime.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/properties">
                <Button size="lg" variant="secondary">Browse Properties</Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark">Create Account</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
