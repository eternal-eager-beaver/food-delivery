import { PrismaService } from '@food-delivery/prisma-client-product';
import { Module } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductService } from './product.service';

@Module({
  providers: [
    PrismaService,
    ProductService,
    CreateProductDto,
    UpdateProductDto,
  ],
  exports: [ProductService, CreateProductDto, UpdateProductDto],
})
export class DataAccessProductModule {}
