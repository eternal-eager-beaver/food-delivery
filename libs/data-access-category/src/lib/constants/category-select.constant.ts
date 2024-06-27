import { Prisma } from '@prisma/client/product';

export const categorySelect: Prisma.CategorySelect = {
  id: true,
  name: true,
  slug: true,
  image: true,
};
