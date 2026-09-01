import type { ReactElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Search, Swords } from 'lucide-react';
import { LOL_SEARCH_URL } from '../constants';

export default function FeaturedTool(): ReactElement {
  const reduceMotion = useReducedMotion();

  return (
    <section className="tool-feature" aria-labelledby="tool-title">
      <motion.div
        className="tool-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="eyebrow"><span>Featured tool</span> Built for the Rift</p>
        <h2 id="tool-title">Know the champion before the match starts.</h2>
        <p>
          CryptonicFlux LoL Search is a fast champion encyclopedia for abilities, roles, and the details worth checking between games.
        </p>
        <a className="button button-tool" href={LOL_SEARCH_URL} target="_blank" rel="noopener noreferrer">
          Search champions <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </motion.div>
      <div className="tool-console" aria-hidden="true">
        <div className="console-top"><span>CF // LOL SEARCH</span><span>ONLINE</span></div>
        <div className="console-search"><Search size={19} /><span>Search a champion…</span><kbd>/</kbd></div>
        <div className="console-panels">
          <div><Swords size={23} /><span>Roles</span><strong>Find your lane</strong></div>
          <div><BookOpen size={23} /><span>Abilities</span><strong>Read the kit</strong></div>
        </div>
      </div>
    </section>
  );
}
