import { User } from './user';

export type AuthFormData = Pick<User, 'email' | 'password'>;
