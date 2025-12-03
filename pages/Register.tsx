import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Home } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
         <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
             <div className="bg-primary text-white p-2 rounded-lg">
              <Home size={24} />
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900">
              Estate<span className="text-secondary">Prime</span>
            </span>
          </Link>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us to find your dream home or sell your property
          </p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleRegister}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input id="first-name" type="text" required className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none" />
            </div>
            <div>
               <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input id="last-name" type="text" required className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none" />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input id="email" type="email" required className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none" />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">I am a</label>
            <select id="role" className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none bg-white">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="agent">Real Estate Agent</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" required className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none" />
          </div>
          
          <div className="flex items-center">
             <input id="terms" type="checkbox" required className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
             <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a></label>
          </div>

          <Button type="submit" fullWidth size="lg" className="mt-6">Create Account</Button>
        </form>
         <div className="text-center text-sm">
           <span className="text-gray-600">Already have an account? </span>
           <Link to="/login" className="font-bold text-primary hover:text-blue-800">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
