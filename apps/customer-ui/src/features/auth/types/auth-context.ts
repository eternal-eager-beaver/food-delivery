import { Nullable } from '@/common/types/nullable';
import { Dispatch, SetStateAction } from 'react';
import { User } from './user';

export interface AuthContextProps {
  user: AuthUser;
  setUser: Dispatch<SetStateAction<AuthUser>>;
}

export type AuthUser = Nullable<User>;
