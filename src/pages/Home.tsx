import type { ReactElement } from 'react';
import FeaturedTool from '../components/FeaturedTool';
import Hero from '../components/Hero';
import Schedule from '../components/Schedule';

export default function HomePage(): ReactElement {
  return (
    <main id="main-content">
      <div className="wrap">
        <Hero />
        <Schedule />
        <FeaturedTool />
      </div>
    </main>
  );
}
