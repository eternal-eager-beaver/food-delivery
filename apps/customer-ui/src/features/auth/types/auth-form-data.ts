import type { User } from '../../user/types/user';

export type AuthFormData = Pick<User, 'email' | 'password'>;
