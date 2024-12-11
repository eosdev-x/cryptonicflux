import React from 'react';
import { Play, Calendar, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden animate-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] 
                      bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center animate-float">
          <h1 className="text-6xl font-bold text-white mb-6 glow-text">
            Welcome to the Flux Zone
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join me on an epic journey through crypto, gaming, and technology.
            Live streams that educate, entertain, and inspire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="button flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Live</span>
            </button>
            <button className="button bg-gray-700 hover:bg-gray-600 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>View Schedule</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <Clock className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Next Stream</h3>
              <p className="text-gray-300">Today at 8:00 PM EST</p>
            </div>
            
            <div className="card">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
              <p className="text-gray-300">Community Members</p>
            </div>
            
            <div className="card">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <p className="text-gray-300">Discord Community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}