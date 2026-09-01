import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/Home';
import GalleryPage from './pages/Gallery';
import AboutPage from './pages/About';

const rootRoute = createRootRoute({ component: SiteLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([homeRoute, galleryRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
