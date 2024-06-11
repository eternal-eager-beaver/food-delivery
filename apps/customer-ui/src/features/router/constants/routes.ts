import Auth from '@/pages/auth/Auth';
import Home from '@/pages/home/Home';
import { IRoute } from '../types/route';

// TODO: use lazy loading
export const routes: IRoute[] = [
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'Home',
    component: Home,
  },
];
