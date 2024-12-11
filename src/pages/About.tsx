import SocialLinks from '../components/SocialLinks';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 glow-text">About CryptonicFlux</h2>
        
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Who We Are</h3>
              <p className="text-gray-300">
                CryptonicFlux is your premier destination for crypto, gaming, and tech live streams. 
                We combine educational content with entertainment, creating an engaging environment 
                for our community to learn and grow together.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                Our mission is to demystify cryptocurrency, showcase exciting gaming content, 
                and explore cutting-edge technology while building a vibrant, supportive community.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Connect With Us</h3>
              <div className="flex items-center space-x-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
