import { lazy } from 'react';

const GamesContainer = lazy(() => import('./containers/Games'));
const NotFound = lazy(() => import('./containers/NotFound'));
const LoginContainer = lazy(() => import('./containers/LoginContainer'));



export const routes = [
  {
    path: '/',
    exact: true,
    // layout: PublicLayout,
    component: GamesContainer
  },
  {
    path: '/games',
    exact: true,
    component: GamesContainer
  },
  {
    path: '/login',
    exact: true,
    component: LoginContainer
  },
  {
    path: '*',
    component: NotFound
  },
];