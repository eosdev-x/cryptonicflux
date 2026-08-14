export type GalleryItem = {
  id: number;
  type: 'image';
  thumbnail: string;
  title: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1600&auto=format&fit=crop',
    title: 'Epic Crypto Analysis Stream',
    description: 'Breaking down the latest market trends',
  },
  {
    id: 2,
    type: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1200&auto=format&fit=crop',
    title: 'Community Gaming Night',
    description: 'Playing Cyberpunk 2077 with viewers',
  },
  {
    id: 3,
    type: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=1200&auto=format&fit=crop',
    title: 'Tech Review Session',
    description: 'Exploring the latest GPU releases',
  },
  {
    id: 4,
    type: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1600&auto=format&fit=crop',
    title: 'Blockchain Developer Workshop',
    description: 'Learning smart contract development',
  },
  {
    id: 5,
    type: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=1200&auto=format&fit=crop',
    title: 'Community Meetup',
    description: 'Virtual hangout with the Flux community',
  },
  {
    id: 6,
    type: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?q=80&w=1200&auto=format&fit=crop',
    title: 'NFT Showcase',
    description: 'Exploring the future of digital art',
  },
];
