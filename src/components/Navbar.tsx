import React, { useState, useEffect } from 'react';
import { LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <LineChart className="w-8 h-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">MLPortfolio</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/models" className="text-gray-300 hover:text-white transition-colors">Models</Link>
            <Link to="/results" className="text-gray-300 hover:text-white transition-colors">Results</Link>
            <Link to="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}