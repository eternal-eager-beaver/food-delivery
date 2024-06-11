import { ComponentType } from 'react';

export type TypeRootStackParamList = {
  Home: undefined;
  Auth: undefined;
  Product: {
    id: string;
  };
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}
