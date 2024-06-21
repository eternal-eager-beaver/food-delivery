import {
  CreateProductDto,
  ProductService,
  UpdateProductDto,
} from '@food-delivery/data-access-product';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

// TODO: Secure endpoints
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  // TODO: redesign this method
  @Get()
  getAll(@Query('slug') slug, @Query('search') search: string) {
    if (slug) {
      return this.productService.getBySlug(slug);
    }

    return this.productService.getAll(search);
  }

  // TODO: add get products by category slug into category controller

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
