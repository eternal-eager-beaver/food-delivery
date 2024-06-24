import { User } from '@prisma/client/user';
import { HttpService } from '../../../common/services/HttpService';

async function getCurrentUser(): Promise<User> {
  const response = await HttpService.get<User>('/users/current');
  return response.data;
}

export const UserService = {
  getCurrentUser,
};
