import { describe, expect, it } from 'vitest';
import { getNextStream } from './schedule';

describe('getNextStream', () => {
  it('returns the upcoming stream later on the same Eastern day', () => {
    const mondayBeforeStream = new Date('2026-09-07T23:30:00.000Z');

    expect(getNextStream(mondayBeforeStream)).toMatchObject({
      day: 'Monday',
      title: 'League of Legends Night',
    });
  });

  it('advances to the next scheduled day after a stream has passed', () => {
    const mondayAfterStream = new Date('2026-09-08T00:30:00.000Z');

    expect(getNextStream(mondayAfterStream)).toMatchObject({
      day: 'Wednesday',
      title: 'Setup Lab & Game Reviews',
    });
  });
});
