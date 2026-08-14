import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import SocialLinks from './SocialLinks';

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="mast">
      <div className="wrap mast-inner">
        <Link to="/" className="brand">
          <span className="mark">CF</span>
          <span className="brand-name">CryptonicFlux</span>
        </Link>

        <nav className="nav-desk" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname === link.to ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SocialLinks className="social-desk" />

        <button
          className="menu-btn"
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
