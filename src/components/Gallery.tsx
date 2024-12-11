import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    title: 'Epic Crypto Analysis Stream',
    description: 'Breaking down the latest market trends',
  },
  {
    id: 2,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f',
    title: 'Community Gaming Night',
    description: 'Playing Cyberpunk 2077 with viewers',
  },
  {
    id: 3,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f',
    title: 'Tech Review Session',
    description: 'Exploring the latest GPU releases',
  },
  {
    id: 4,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1563863251222-11beb6151b14',
    title: 'Blockchain Developer Workshop',
    description: 'Learning smart contract development',
  },
  {
    id: 5,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1559336197-ded8aaa244bc',
    title: 'Community Meetup',
    description: 'Virtual hangout with the Flux community',
  },
  {
    id: 6,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e',
    title: 'NFT Showcase',
    description: 'Exploring the future of digital art',
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const openModal = (id: number) => setSelectedItem(id);
  const closeModal = () => setSelectedItem(null);

  const selectedImage = galleryItems.find(item => item.id === selectedItem);

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12 glow-text">
          Stream Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="card group cursor-pointer hover-scale overflow-hidden"
              onClick={() => openModal(item.id)}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/95">
          <div className="relative max-w-5xl w-full bg-gray-800 rounded-xl overflow-hidden card">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.thumbnail}
              alt={selectedImage.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}