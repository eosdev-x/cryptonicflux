export type GalleryTone = 'lime' | 'violet' | 'blue' | 'orange' | 'pink' | 'cyan';
export type GalleryKind = 'ranked' | 'community' | 'setup' | 'strategy' | 'variety' | 'late-night';

export interface GalleryItem {
  id: number;
  tone: GalleryTone;
  kind: GalleryKind;
  title: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, tone: 'lime', kind: 'ranked', title: 'League Night', description: 'Champion picks, close calls, and one more queue.' },
  { id: 2, tone: 'violet', kind: 'community', title: 'Community Lobby', description: 'Open slots and games with the Flux crew.' },
  { id: 3, tone: 'blue', kind: 'setup', title: 'Setup Lab', description: 'Tuning the gear behind the stream.' },
  { id: 4, tone: 'orange', kind: 'strategy', title: 'Strategy Desk', description: 'Breaking down the play before loading in.' },
  { id: 5, tone: 'pink', kind: 'variety', title: 'Variety Queue', description: 'A change of pace beyond the Rift.' },
  { id: 6, tone: 'cyan', kind: 'late-night', title: 'After Hours', description: 'Late sessions in the glow of the Flux Zone.' },
];
