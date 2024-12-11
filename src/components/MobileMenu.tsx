import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gray-900 px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-cyan-400 glow-text" onClick={onClose}>
            CryptonicFlux
          </Link>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-6 flow-root">
          <div className="space-y-4">
            <Link
              to="/"
              className={`block text-lg ${isActive('/')} transition-colors`}
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`block text-lg ${isActive('/gallery')} transition-colors`}
              onClick={onClose}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className={`block text-lg ${isActive('/about')} transition-colors`}
              onClick={onClose}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}