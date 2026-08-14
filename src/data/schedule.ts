export type ScheduleItem = {
  day: string;
  time: string;
  title: string;
};

export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export const scheduleData: ScheduleItem[] = [
  { day: 'Monday', time: '8:00 PM EST', title: 'Crypto Market Analysis' },
  { day: 'Wednesday', time: '7:00 PM EST', title: 'Tech Talk & Reviews' },
  { day: 'Friday', time: '9:00 PM EST', title: 'Gaming Night' },
  { day: 'Saturday', time: '3:00 PM EST', title: 'Community Events' },
];

export const weekBoard: ScheduleItem[] = weekDays.map((day) => {
  const live = scheduleData.find((item) => item.day === day);
  return live ?? { day, time: '', title: 'Off air' };
});

function parseHour(time: string): number {
  const part = time.split(' ')[0];
  let hours = parseInt(part.split(':')[0], 10);
  if (time.includes('PM') && hours !== 12) hours += 12;
  if (time.includes('AM') && hours === 12) hours = 0;
  return hours;
}

export function getNextStream(now = new Date()): ScheduleItem {
  const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  const ranked = scheduleData.map((stream) => {
    const hours = parseHour(stream.time);
    const currentIndex = weekDays.indexOf(currentDay as (typeof weekDays)[number]);
    const targetIndex = weekDays.indexOf(stream.day as (typeof weekDays)[number]);
    let offset = targetIndex - currentIndex;
    if (offset < 0) offset += 7;

    let sortValue = hours + offset * 24;
    if (
      stream.day === currentDay &&
      (hours < currentHour || (hours === currentHour && currentMinutes > 0))
    ) {
      sortValue = hours + 168;
    }

    return { ...stream, sortValue };
  });

  ranked.sort((a, b) => a.sortValue - b.sortValue);
  return ranked[0];
}
