import React from 'react';
import { Twitch, Youtube, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://twitch.tv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 transition-colors"
      >
        <Twitch className="w-6 h-6" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
      >
        <Youtube className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>
    </div>
  );
}