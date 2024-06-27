import { PrismaService } from '@food-delivery/prisma-client-product';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';

@Module({
  providers: [
    PrismaService,
    CategoryService,
    CreateCategoryDto,
    UpdateCategoryDto,
  ],
  exports: [CategoryService, CreateCategoryDto, UpdateCategoryDto],
})
export class DataAccessCategoryModule {}
