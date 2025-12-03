import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, User, Phone, Mail, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';
import Button from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/#about' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-secondary transition-colors">
              <Home size={24} />
            </div>
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Estate<span className="text-secondary">Prime</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className={`font-medium text-sm hover:text-secondary ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Log In
            </Link>
            <Link to="/register">
              <Button size="sm" variant={isScrolled ? "primary" : "secondary"}>
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-100">
            <span className="text-2xl font-serif font-bold text-primary">
              Estate<span className="text-secondary">Prime</span>
            </span>
          </div>
          <div className="p-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-4" />
            <Link to="/login" className="text-lg font-medium text-gray-800 hover:text-primary">
              Log In
            </Link>
            <Link to="/register">
              <Button fullWidth variant="primary">Register</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary text-white p-2 rounded-lg">
                  <Home size={20} />
                </div>
                <span className="text-2xl font-serif font-bold">
                  Estate<span className="text-secondary">Prime</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We help you find the perfect property that fits your lifestyle. 
                Luxury homes, apartments, and unique listings all in one place.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-secondary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Property Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Mortgage Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Housing Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Sell Your Home</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">123 Real Estate Blvd, Suite 400<br />New York, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-secondary mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-secondary mr-3 flex-shrink-0" />
                  <span className="text-gray-400">contact@estateprime.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; 2024 EstatePrime. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;