import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-64 bg-gray-800 p-6 shadow-xl transform transition-transform">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <a href="#home" className="mobile-nav-link" onClick={onClose}>Home</a>
          <a href="#schedule" className="mobile-nav-link" onClick={onClose}>Schedule</a>
          <a href="#gallery" className="mobile-nav-link" onClick={onClose}>Gallery</a>
          <a href="#about" className="mobile-nav-link" onClick={onClose}>About</a>
        </nav>
      </div>
    </div>
  );
}