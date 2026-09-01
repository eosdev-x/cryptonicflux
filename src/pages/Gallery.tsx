import type { ReactElement } from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage(): ReactElement {
  return (
    <main className="wrap interior" id="main-content">
      <header className="interior-heading">
        <p className="eyebrow"><span>Highlights</span> From the Flux Zone</p>
        <h1>Scenes from the queue.</h1>
        <p>League sessions, community lobbies, setup tinkering, and everything that happens after “one more game.”</p>
      </header>
      <Gallery />
    </main>
  );
}
