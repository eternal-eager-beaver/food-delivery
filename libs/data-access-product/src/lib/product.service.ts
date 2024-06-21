import { PrismaService } from '@food-delivery/prisma-client-product';
import { generateSlug } from '@food-delivery/utils';
import { Injectable } from '@nestjs/common';
import { productSelect } from './constants/product-select.constant';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  getAll(search?: string) {
    if (search) {
      return this.search(search);
    }

    return this.prisma.product.findMany({
      select: productSelect,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  search(search: string) {
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      },
      select: productSelect,
    });
  }

  getBySlug(slug: string) {
    const product = this.prisma.product.findUnique({
      where: {
        slug,
      },
      select: productSelect,
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  getProductsByCategorySlug(slug: string) {
    const products = this.prisma.product.findMany({
      where: {
        category: {
          slug,
        },
      },
      select: productSelect,
    });

    if (!products) {
      throw new Error('Products not found');
    }

    return products;
  }

  create(product: CreateProductDto) {
    const { name, description, price, categoryId, image } = product;

    return this.prisma.product.create({
      data: {
        name,
        description,
        price,
        slug: generateSlug(product.name),
        category: {
          connect: {
            id: categoryId,
          },
        },
        image,
      },
      select: productSelect,
    });
  }

  // TODO: avoid code duplication create & update
  update(id: number, product: UpdateProductDto) {
    const { name, description, price, categoryId, image } = product;

    // TODO: test case when category with provided ID doesn't exist

    return this.prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        price,
        slug: generateSlug(product.name),
        category: {
          connect: {
            id: categoryId,
          },
        },
        image,
      },
      select: productSelect,
    });
  }

  delete(id: number) {
    return this.prisma.product.delete({
      where: {
        id,
      },
      select: productSelect,
    });
  }
}
