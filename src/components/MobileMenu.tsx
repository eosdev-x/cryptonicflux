import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { LOL_SEARCH_URL } from '../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
] as const;

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps): ReactElement {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="drawer-backdrop" type="button" onClick={onClose} aria-label="Close navigation menu" />
          <motion.nav
            className="drawer-panel"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          >
            <div className="drawer-head">
              <span>Navigation</span>
              <button type="button" onClick={onClose} aria-label="Close navigation menu">
                <X aria-hidden="true" size={22} />
              </button>
            </div>
            {links.map((link, index) => (
              <Link key={link.to} to={link.to} onClick={onClose}>
                <span>0{index + 1}</span> {link.label}
              </Link>
            ))}
            <a className="drawer-tool" href={LOL_SEARCH_URL} target="_blank" rel="noopener noreferrer">
              LoL Search <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
