import { HttpService } from '../../../common/services/HttpService';
import type { User } from '../types/user';

async function getCurrentUser(): Promise<User> {
  const response = await HttpService.get<User>('/users/current');
  return response.data;
}

export const UserService = {
  getCurrentUser,
};
