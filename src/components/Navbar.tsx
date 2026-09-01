import type { ReactElement } from 'react';
import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchToolsMenu from './SearchToolsMenu';

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
] as const;

export default function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mast">
      <div className="wrap mast-inner">
        <Link to="/" className="brand" aria-label="CryptonicFlux home">
          <span className="mark" aria-hidden="true">CF</span>
          <span className="brand-name">CryptonicFlux</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              activeProps={{ 'aria-current': 'page' }}
            >
              {link.label}
            </Link>
          ))}
          <SearchToolsMenu />
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Menu aria-hidden="true" size={22} />
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
