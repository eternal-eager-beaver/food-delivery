import { Prisma } from '@food-delivery/prisma-client-user';

export const userSelect: Prisma.UserSelect = {
  id: true,
  email: true,
  name: true,
  avatarPath: true,
  password: false,
  phone: true,
};
