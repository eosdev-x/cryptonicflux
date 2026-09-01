import type { ReactElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock3 } from 'lucide-react';
import { getEasternWeekday, weekBoard } from '../data/schedule';

export default function Schedule(): ReactElement {
  const reduceMotion = useReducedMotion();
  const today = getEasternWeekday();

  return (
    <section className="schedule-section" id="schedule" aria-labelledby="schedule-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span>Weekly board</span> On Twitch</p>
          <h2 id="schedule-title">What’s in the queue</h2>
        </div>
        <p><Clock3 aria-hidden="true" size={16} /> All times Eastern</p>
      </div>
      <div className="schedule-board">
        {weekBoard.map((item, index) => {
          const isOffAir = !item.time;
          const isToday = item.day === today;
          return (
            <motion.article
              key={item.day}
              className={`schedule-slot${isOffAir ? ' is-off' : ''}${isToday ? ' is-today' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.035 }}
            >
              <div className="slot-index">0{index + 1}</div>
              <div className="slot-day">{item.day.slice(0, 3)}</div>
              <h3>{item.title}</h3>
              <p>{item.time || 'No broadcast'}</p>
              {isToday ? <span className="today-flag">Today</span> : null}
            </motion.article>
          );
        })}
      </div>
      <p className="schedule-note">Schedule may shift when the game runs long. Twitch has the latest go-live status.</p>
    </section>
  );
}
