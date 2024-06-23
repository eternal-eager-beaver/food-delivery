export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  avatarPath: string;
  favorites: Product[];
}

// TODO: move to aapropriate feature
interface Product {
  name: string;
}
