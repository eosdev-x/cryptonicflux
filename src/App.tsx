import type { ReactElement } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';

export default function App(): ReactElement {
  return <RouterProvider router={router} />;
}
