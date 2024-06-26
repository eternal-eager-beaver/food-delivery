import type { Product } from '../../product/types/product';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  avatarPath: string;
  favorites: Product[];
}
