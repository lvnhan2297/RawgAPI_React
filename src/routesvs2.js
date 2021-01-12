import GamesContainer from './containers/GamesRendered'
import NotFound from './containers/NotFound'
import LoginContainer from './containers/LoginContainer'


export const routes = [
  {
    path: '/',
    exact: true,
    component: ()=><GamesContainer/>
  },
  {
    path: '/games',
    exact: true,
    component: ()=><GamesContainer/>
  },
  {
    path: '/login',
    exact: true,
    component: ()=><LoginContainer/>
  },
  {
    path: '*',
    component: ()=><NotFound/>
  },
];