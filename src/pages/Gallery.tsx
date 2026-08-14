import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div className="wrap interior">
      <div className="interior-head">
        <p className="kicker">Stream highlights</p>
        <h1>Gallery</h1>
        <p>
          Selected nights from the Flux Zone — markets, hardware, games, and the people who show
          up.
        </p>
      </div>
      <Gallery />
    </div>
  );
}
