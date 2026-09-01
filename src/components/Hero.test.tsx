import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';
import { LOL_SEARCH_URL } from '../constants';

describe('Hero', () => {
  it('links prominently to CryptonicFlux LoL Search', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /open lol search/i })).toHaveAttribute(
      'href',
      LOL_SEARCH_URL,
    );
  });
});
