import { PrismaService } from '@food-delivery/prisma-client-user';
import { Injectable } from '@nestjs/common';
import { userSelect } from './constants/user-select.constant';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getById(id: number) {
    const user = this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        ...userSelect,
        // favorites: {
        //   select: {
        //     id: true,
        //     name: true,
        //     price: true,
        //     image: true,
        //     slug: true,
        //     category: {
        //       select: {
        //         name: true,
        //       },
        //     },
        //   },
        // },
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  // TODO: fix implementation
  // async toggleFavorite(userId: number, productId: number) {
  //   const user = await this.getById(userId);

  //   if (!user) {
  //     throw new Error('User not found');
  //   }

  //   const isFavorite = user.favorites.some(
  //     (product) => product.id === productId,
  //   );

  //   await this.prisma.user.update({
  //     where: {
  //       id: userId,
  //     },
  //     data: {
  //       favorites: {
  //         [isFavorite ? 'disconnect' : 'connect']: {
  //           id: productId,
  //         },
  //       },
  //     },
  //   });
  // }
}
