import type { ReactElement } from 'react';
import { ArrowUpRight, Gamepad2, Radio, Users } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import { LOL_SEARCH_URL, TWITCH_URL } from '../constants';

export default function AboutPage(): ReactElement {
  return (
    <main className="wrap interior" id="main-content">
      <header className="interior-heading about-heading">
        <p className="eyebrow"><span>About</span> The channel</p>
        <h1>Games are better with a crew.</h1>
        <p>CryptonicFlux is a gaming channel built around live sessions, useful tools, and a welcoming community.</p>
      </header>

      <section className="about-grid" aria-label="About CryptonicFlux">
        <article><Radio aria-hidden="true" /><span>01</span><h2>Live streams</h2><p>League nights, variety games, setup talk, and whatever makes the next session worth sharing.</p></article>
        <article><Users aria-hidden="true" /><span>02</span><h2>Community</h2><p>A place to join the lobby, swap ideas, and hang out beyond the broadcast.</p></article>
        <article><Gamepad2 aria-hidden="true" /><span>03</span><h2>Player tools</h2><p>Practical side projects such as LoL Search, made to help players get into the game faster.</p></article>
      </section>

      <section className="about-connect" aria-labelledby="connect-title">
        <div><p className="eyebrow"><span>Connect</span> Pick a channel</p><h2 id="connect-title">Meet in the Flux Zone.</h2></div>
        <div className="connect-actions">
          <a className="button button-live" href={TWITCH_URL} target="_blank" rel="noopener noreferrer">Watch on Twitch <ArrowUpRight aria-hidden="true" size={17} /></a>
          <a className="button button-tool" href={LOL_SEARCH_URL} target="_blank" rel="noopener noreferrer">Open LoL Search <ArrowUpRight aria-hidden="true" size={17} /></a>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
