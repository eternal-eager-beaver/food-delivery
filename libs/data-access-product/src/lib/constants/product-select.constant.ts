import { Prisma } from '@prisma/client/product';

export const productSelect: Prisma.ProductSelect = {
  id: true,
  name: true,
  description: true,
  slug: true,
  image: true,
  price: true,
  createdAt: true,
  // TODO: export category
  // category: {
  //   select: categorySelect,
  // },
};
