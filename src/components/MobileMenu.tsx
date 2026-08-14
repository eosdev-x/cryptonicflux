import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="drawer lg:hidden">
      <div className="drawer-bg" onClick={onClose} />
      <div className="drawer-panel">
        <button className="drawer-x" type="button" onClick={onClose} aria-label="Close menu">
          Close
        </button>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            aria-current={location.pathname === link.to ? 'page' : undefined}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
