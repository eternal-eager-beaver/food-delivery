import Explorer from '../../../pages/explorer/Explorer';
import Favorites from '../../../pages/favorites/Favorites';
import Home from '../../../pages/home/Home';
import Profile from '../../../pages/profile/Profile';
import Search from '../../../pages/search/Search';
import { IRoute } from '../types/route';

// TODO: use lazy loading
export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Favorites',
    component: Favorites,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'Explorer',
    component: Explorer,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];
