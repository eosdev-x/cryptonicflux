// React is automatically imported in Next.js with JSX Transform
import { Play, Calendar, Clock } from 'lucide-react';
import { scheduleData } from './Schedule';

export default function Hero() {
  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById('schedule');
    scheduleSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const getNextStream = () => {
    const now = new Date();
    const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();

    // Convert schedule times to comparable values
    const scheduleWithDates = scheduleData.map(stream => {
      const [time] = stream.time.split(' ')[0].split(':');
      let hours = parseInt(time);
      if (stream.time.includes('PM') && hours !== 12) hours += 12;
      if (stream.time.includes('AM') && hours === 12) hours = 0;
      return {
        ...stream,
        hours,
        minutes: 0, // All streams start at XX:00
        sortValue: stream.day === currentDay && (hours < currentHour || (hours === currentHour && 0 <= currentMinutes)) 
          ? hours + 168 // Add a week if the stream already passed today
          : hours + getDayOffset(currentDay, stream.day) * 24
      };
    });

    // Sort and get the next stream
    const nextStream = scheduleWithDates.sort((a, b) => a.sortValue - b.sortValue)[0];
    return nextStream;
  };

  const getDayOffset = (currentDay: string, targetDay: string) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentIndex = days.indexOf(currentDay);
    const targetIndex = days.indexOf(targetDay);
    let offset = targetIndex - currentIndex;
    if (offset <= 0) offset += 7;
    return offset;
  };

  const nextStream = getNextStream();

  return (
    <div className="min-h-screen relative overflow-hidden animate-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] 
                      bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-16">
        <div className="text-center animate-float">
          <h1 className="text-6xl font-bold text-white mb-6 glow-text">
            Welcome to the Flux Zone
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join me on an epic journey through crypto, gaming, and technology.
            Live streams that educate, entertain, and inspire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a href="https://www.twitch.tv/cryptonicflux" target="_blank" rel="noopener noreferrer">
              <button className="button flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Live</span>
              </button>
            </a>
            <button 
              onClick={scrollToSchedule}
              className="button bg-gray-700 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>View Schedule</span>
            </button>
          </div>
          
          <div id="schedule" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <Clock className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Next Stream</h3>
              <p className="text-gray-300">{nextStream.day} at {nextStream.time}</p>
            </div>
            
            <div className="card">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1K+</div>
              <p className="text-gray-300">Hours Streamed</p>
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