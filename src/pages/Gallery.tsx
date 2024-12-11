import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 glow-text">Gallery</h2>
        <Gallery />
      </div>
    </div>
  );
}
