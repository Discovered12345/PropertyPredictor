import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Home, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-black/30 backdrop-blur-sm shadow-lg sticky top-0 z-10 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Housing Price Predictor
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/predictor"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/predictor' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span>Price Predictor</span>
            </Link>
            
            <Link
              to="/creators"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/creators' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Creators</span>
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}