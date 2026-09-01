import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('application router', () => {
  it('navigates from the home route to the gallery route', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(await screen.findByRole('heading', { name: /live games/i })).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: 'Gallery' }));

    expect(await screen.findByRole('heading', { name: /scenes from the queue/i })).toBeInTheDocument();
  });
});
