import { PrismaService } from '@food-delivery/prisma-client-product';
import { generateSlug } from '@food-delivery/utils';
import { Injectable } from '@nestjs/common';
import { categorySelect } from './constants/category-select.constant';
import type { CreateCategoryDto } from './dto/create-category.dto';
import type { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.category.findMany({
      select: categorySelect,
    });
  }

  getById(id: number) {
    const category = this.prisma.category.findUnique({
      where: {
        id,
      },
      select: categorySelect,
    });

    if (!category) {
      throw new Error('Category not found');
    }

    return category;
  }

  getBySlug(slug: string) {
    const category = this.prisma.category.findUnique({
      where: {
        slug,
      },
      select: categorySelect,
    });

    if (!category) {
      throw new Error('Category not found');
    }

    return category;
  }

  create(category: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        name: category.name,
        slug: generateSlug(category.name),
        image: category.image,
      },
      select: categorySelect,
    });
  }

  // TODO: avoid code duplication create & update
  update(id: number, category: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        name: category.name,
        slug: generateSlug(category.name),
        image: category.image,
      },
      select: categorySelect,
    });
  }

  delete(id: number) {
    return this.prisma.category.delete({
      where: {
        id,
      },
      select: categorySelect,
    });
  }
}
