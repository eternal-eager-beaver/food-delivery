import { ComponentType } from 'react';

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Favorites: undefined;
  Search: undefined;
  Explorer: undefined;
  Profile: undefined;
  Cart: undefined;
};

export interface IRoute {
  name: keyof RootStackParamList;
  component: ComponentType;
}
