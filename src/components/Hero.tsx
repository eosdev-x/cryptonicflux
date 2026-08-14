import { getNextStream } from '../data/schedule';

export default function Hero() {
  const nextStream = getNextStream();

  return (
    <section className="broadcast">
      <div>
        <p className="kicker">Welcome to the</p>
        <h1 className="display">Flux Zone</h1>
        <p className="lede">
          Join me on an epic journey through crypto, gaming, and technology. Live streams that
          educate, entertain, and inspire.
        </p>
      </div>
      <aside className="next" aria-label="Next stream">
        <div className="next-top">
          <span>Next up</span>
          <span className="next-live">Twitch</span>
        </div>
        <h2>{nextStream.title}</h2>
        <p className="next-meta">
          {nextStream.day} · {nextStream.time}
        </p>
        <div className="actions">
          <a
            className="btn btn-primary"
            href="https://www.twitch.tv/cryptonicflux"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Live
          </a>
          <a className="btn btn-ghost" href="#schedule">
            View schedule
          </a>
        </div>
      </aside>
    </section>
  );
}
