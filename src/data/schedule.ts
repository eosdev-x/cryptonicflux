export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export type WeekDay = (typeof weekDays)[number];

export interface ScheduleItem {
  day: WeekDay;
  time: string;
  title: string;
}

interface EasternClock {
  day: WeekDay;
  hour: number;
  minute: number;
}

const easternClockFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
  hourCycle: 'h23',
});

export const scheduleData: ScheduleItem[] = [
  { day: 'Monday', time: '8:00 PM ET', title: 'League of Legends Night' },
  { day: 'Wednesday', time: '7:00 PM ET', title: 'Setup Lab & Game Reviews' },
  { day: 'Friday', time: '9:00 PM ET', title: 'Friday Game Queue' },
  { day: 'Saturday', time: '3:00 PM ET', title: 'Community Lobby' },
];

export const weekBoard: ScheduleItem[] = weekDays.map((day) => {
  const liveSlot = scheduleData.find((item) => item.day === day);
  return liveSlot ?? { day, time: '', title: 'Off air' };
});

function isWeekDay(value: string): value is WeekDay {
  return weekDays.some((day) => day === value);
}

function parseTime(time: string): { hour: number; minute: number } {
  const match = /^(?<hour>\d{1,2}):(?<minute>\d{2}) (?<period>AM|PM)/.exec(time);
  if (!match?.groups) throw new Error(`Invalid schedule time: ${time}`);

  const period = match.groups.period;
  let hour = Number(match.groups.hour);
  const minute = Number(match.groups.minute);

  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;
  return { hour, minute };
}

function getEasternClock(now: Date): EasternClock {
  const parts = easternClockFormatter.formatToParts(now);
  const getPart = (type: Intl.DateTimeFormatPartTypes): string | undefined =>
    parts.find((part) => part.type === type)?.value;
  const day = getPart('weekday');

  if (!day || !isWeekDay(day)) throw new Error('Unable to read Eastern weekday');

  return {
    day,
    hour: Number(getPart('hour')),
    minute: Number(getPart('minute')),
  };
}

export function getEasternWeekday(now: Date = new Date()): WeekDay {
  return getEasternClock(now).day;
}

export function getNextStream(now: Date = new Date()): ScheduleItem {
  const current = getEasternClock(now);
  const currentIndex = weekDays.indexOf(current.day);
  const currentMinuteOfDay = current.hour * 60 + current.minute;

  const ranked = scheduleData.map((stream) => {
    const target = parseTime(stream.time);
    const targetIndex = weekDays.indexOf(stream.day);
    const targetMinuteOfDay = target.hour * 60 + target.minute;
    let dayOffset = targetIndex - currentIndex;

    if (dayOffset < 0 || (dayOffset === 0 && targetMinuteOfDay < currentMinuteOfDay)) {
      dayOffset += 7;
    }

    return { stream, distance: dayOffset * 24 * 60 + targetMinuteOfDay - currentMinuteOfDay };
  });

  const next = ranked.sort((first, second) => first.distance - second.distance)[0];
  if (!next) throw new Error('Schedule must include at least one stream');
  return next.stream;
}
