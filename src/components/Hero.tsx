import type { ReactElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Radio } from 'lucide-react';
import { TWITCH_URL } from '../constants';
import { getNextStream } from '../data/schedule';

export default function Hero(): ReactElement {
  const reduceMotion = useReducedMotion();
  const nextStream = getNextStream();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="eyebrow"><span>Channel 01</span> Welcome to the Flux Zone</p>
        <h1 id="hero-title"><span>Live games.</span><em>Good company.</em></h1>
        <p className="hero-lede">
          Tune in for late-night gaming, League sessions, community lobbies, and tools built for the next queue.
        </p>
        <div className="hero-actions" aria-label="Featured destinations">
          <a className="button button-live" href={TWITCH_URL} target="_blank" rel="noopener noreferrer">
            <Radio aria-hidden="true" size={18} /> Watch on Twitch
          </a>
        </div>
        <a className="schedule-jump" href="#schedule">
          This week’s board <ArrowDown aria-hidden="true" size={15} />
        </a>
      </motion.div>

      <motion.aside
        className="on-air-card"
        aria-label="Next stream"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.12 }}
      >
        <div className="signal-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="on-air-top">
          <span className="status"><i /> Next transmission</span>
          <span>CF—LIVE</span>
        </div>
        <div className="on-air-number" aria-hidden="true">01</div>
        <div className="on-air-content">
          <p>{nextStream.day} · {nextStream.time}</p>
          <h2>{nextStream.title}</h2>
          <a href={TWITCH_URL} target="_blank" rel="noopener noreferrer">
            Go to channel <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </motion.aside>
    </section>
  );
}
