import type { ReactElement } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { LOL_SEARCH_URL } from '../constants';
import { socialLinks } from '../data/social';

export default function Footer(): ReactElement {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="footer-brand">
            CryptonicFlux
          </Link>
          <p>Live games, useful tools, and a place to queue up together.</p>
        </div>
        <nav className="footer-links" aria-label="Social links">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ))}
        </nav>
        <a className="footer-tool" href={LOL_SEARCH_URL} target="_blank" rel="noopener noreferrer">
          LoL Search <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </footer>
  );
}
