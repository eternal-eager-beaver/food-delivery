import { PrismaService } from '@food-delivery/prisma-client-product';
import { Module } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Module({
  controllers: [],
  providers: [
    PrismaService,
    ProductService,
    CreateProductDto,
    UpdateProductDto,
  ],
  exports: [ProductService, CreateProductDto, UpdateProductDto],
})
export class DataAccessProductModule {}
