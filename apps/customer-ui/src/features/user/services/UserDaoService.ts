import { HttpService } from '@/common/services/HttpService';
import { User } from '@prisma/client/user';

async function getCurrentUser(): Promise<User> {
  const response = await HttpService.get<User>('/users/current');
  return response.data;
}

export const UserService = {
  getCurrentUser,
};
