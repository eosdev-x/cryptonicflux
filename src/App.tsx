import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import GalleryPage from './pages/Gallery';
import AboutPage from './pages/About';
import { socialLinks } from './data/social';

function HomePage() {
  return (
    <main>
      <div className="wrap">
        <Hero />
        <Schedule />
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap site-foot">
        <span>CryptonicFlux</span>
        <span>
          {socialLinks.map((item, index) => (
            <span key={item.label}>
              {index > 0 ? ' · ' : ''}
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
