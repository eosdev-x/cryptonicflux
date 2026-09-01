import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';
import { TWITCH_URL } from '../constants';

describe('Hero', () => {
  it('links prominently to the Twitch channel', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /watch on twitch/i })).toHaveAttribute(
      'href',
      TWITCH_URL,
    );
    expect(screen.queryByRole('link', { name: /open lol search/i })).not.toBeInTheDocument();
  });
});
