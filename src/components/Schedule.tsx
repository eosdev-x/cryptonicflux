import { weekBoard } from '../data/schedule';

export default function Schedule() {
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });

  return (
    <section className="week" id="schedule">
      <div className="week-head">
        <h2>Stream schedule</h2>
        <span>Eastern time</span>
      </div>
      <div className="board">
        {weekBoard.map((item) => {
          const off = !item.time;
          const todayClass = item.day === today ? ' is-today' : '';
          const offClass = off ? ' is-off' : '';
          return (
            <article key={item.day} className={`slot${offClass}${todayClass}`}>
              <div className="slot-day">{item.day.slice(0, 3)}</div>
              <div className="slot-title">{item.title}</div>
              <div className="slot-time">{item.time || '—'}</div>
            </article>
          );
        })}
      </div>
      <p className="facts">
        <b>1K+</b> hours streamed · Discord community <b>24/7</b>
      </p>
    </section>
  );
}
