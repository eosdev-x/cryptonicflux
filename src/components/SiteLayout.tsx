import type { ReactElement } from 'react';
import { Outlet } from '@tanstack/react-router';
import Footer from './Footer';
import Navbar from './Navbar';

export default function SiteLayout(): ReactElement {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
