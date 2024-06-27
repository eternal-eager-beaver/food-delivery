import { ComponentType } from 'react';

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Favorites: undefined;
  Search: undefined;
  Explorer: undefined;
  Profile: undefined;
  Cart: undefined;
  Category: {
    id: string;
  };
};

export interface IRoute {
  name: keyof RootStackParamList;
  component: ComponentType;
}
