import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400';
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-cyan-400 glow-text">
            CryptonicFlux
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
              <Link to="/gallery" className={`${isActive('/gallery')} transition-colors`}>Gallery</Link>
              <Link to="/about" className={`${isActive('/about')} transition-colors`}>About</Link>
            </div>
            <SocialLinks />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 lg:hidden">
            <SocialLinks />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}