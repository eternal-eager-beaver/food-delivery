import { CategoryService } from '@food-delivery/data-access-category';
import { PrismaService } from '@food-delivery/prisma-client-product';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}
