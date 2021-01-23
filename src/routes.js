import { lazy } from 'react';

const GamesContainer = lazy(() => import('./containers/Games'));
const NotFound = lazy(() => import('./containers/NotFound'));
const LoginContainer = lazy(() => import('./containers/LoginContainer'));
const RegisterContainer = lazy(() => import('./containers/RegisterContainer'));
const GameDetail = lazy(() => import('./containers/GameDetail.js'));



export const routes = [
  {
    path: '/login',
    exact: true,
    component: LoginContainer
  },
  {
    path: '/register',
    exact: true,
    component: RegisterContainer
  },
  {
    path: '/games/:slug',
    exact: true,
    component: GameDetail
  },
  {
    path: '/games',
    exact: true,
    component: GamesContainer
  },
  {
    path: '*',
    component: NotFound
  },
];