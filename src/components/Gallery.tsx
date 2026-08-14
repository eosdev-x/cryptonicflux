import { useEffect, useState } from 'react';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const selectedImage = galleryItems.find((item) => item.id === selectedItem);

  useEffect(() => {
    if (selectedItem === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedItem]);

  return (
    <>
      <div className="film">
        {galleryItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="shot"
            onClick={() => setSelectedItem(item.id)}
          >
            <img src={item.thumbnail} alt={item.title} />
            <div className="cap">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedItem && selectedImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedItem(null);
          }}
        >
          <button
            className="lightbox-x"
            type="button"
            onClick={() => setSelectedItem(null)}
            aria-label="Close"
          >
            Close
          </button>
          <div className="lightbox-card">
            <img src={selectedImage.thumbnail} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
