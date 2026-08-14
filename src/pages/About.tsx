import SocialLinks from '../components/SocialLinks';

export default function AboutPage() {
  return (
    <div className="wrap interior">
      <div className="interior-head">
        <p className="kicker">The channel</p>
        <h1>About CryptonicFlux</h1>
      </div>
      <div className="about-grid">
        <div>
          <h2>Who we are</h2>
          <p>
            CryptonicFlux is your premier destination for crypto, gaming, and tech live streams. We
            combine educational content with entertainment, creating an engaging environment for our
            community to learn and grow together.
          </p>
        </div>
        <div>
          <h2>Our mission</h2>
          <p>
            Our mission is to demystify cryptocurrency, showcase exciting gaming content, and
            explore cutting-edge technology while building a vibrant, supportive community.
          </p>
          <h2>Connect with us</h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
