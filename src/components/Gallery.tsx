import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Gamepad2, Headphones, MonitorCog, MoonStar, Swords, Users, X } from 'lucide-react';
import type { GalleryKind } from '../data/gallery';
import { galleryItems } from '../data/gallery';

const icons: Record<GalleryKind, typeof Gamepad2> = {
  ranked: Swords,
  community: Users,
  setup: MonitorCog,
  strategy: Gamepad2,
  variety: Headphones,
  'late-night': MoonStar,
};

export default function Gallery(): ReactElement {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const selectedItem = galleryItems.find((item) => item.id === selectedId);
  const SelectedIcon = selectedItem ? icons[selectedItem.kind] : null;

  useEffect(() => {
    if (selectedId === null) return undefined;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setSelectedId(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId]);

  return (
    <>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => {
          const Icon = icons[item.kind];
          return (
            <motion.button
              key={item.id}
              type="button"
              className={`gallery-card tone-${item.tone}`}
              onClick={() => setSelectedId(item.id)}
              aria-label={`Open ${item.title} highlight`}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.055 }}
            >
              <div className="gallery-art" aria-hidden="true">
                <span className="art-orbit" />
                <Icon size={54} strokeWidth={1.35} />
                <strong>0{item.id}</strong>
              </div>
              <div className="gallery-caption">
                <span>{item.kind.replace('-', ' ')}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedId(null);
            }}
          >
            <motion.div
              className={`lightbox-card tone-${selectedItem.tone}`}
              initial={reduceMotion ? false : { y: 22, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { y: 14, scale: 0.98 }}
            >
              <button ref={closeButtonRef} type="button" onClick={() => setSelectedId(null)} aria-label="Close highlight">
                <X aria-hidden="true" size={21} />
              </button>
              <div className="lightbox-art" aria-hidden="true">
                {SelectedIcon ? <SelectedIcon size={88} strokeWidth={1.1} /> : null}
              </div>
              <p>{selectedItem.kind.replace('-', ' ')}</p>
              <h2 id="lightbox-title">{selectedItem.title}</h2>
              <span>{selectedItem.description}</span>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
