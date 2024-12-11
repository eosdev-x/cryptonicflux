import React from 'react';

const scheduleData = [
  { day: 'Monday', time: '8:00 PM EST', title: 'Crypto Market Analysis' },
  { day: 'Wednesday', time: '7:00 PM EST', title: 'Tech Talk & Reviews' },
  { day: 'Friday', time: '9:00 PM EST', title: 'Gaming Night' },
  { day: 'Saturday', time: '3:00 PM EST', title: 'Community Events' },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12 glow-text">
          Stream Schedule
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scheduleData.map((item, index) => (
            <div key={index} className="card hover-scale">
              <div className="text-lg font-semibold text-cyan-400 mb-2">
                {item.day}
              </div>
              <div className="text-white mb-1">{item.time}</div>
              <div className="text-gray-400">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}