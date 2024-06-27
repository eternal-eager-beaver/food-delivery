import {
  CategoryService,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@food-delivery/data-access-category';
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
@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService // private readonly productService: ProductService
  ) {}

  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  // TODO: redesign this method
  @Get()
  read(@Query('id', ParseIntPipe) id, @Query('slug') slug) {
    if (slug) {
      return this.categoryService.getBySlug(slug);
    }

    if (id) {
      return this.categoryService.getById(id);
    }

    return this.categoryService.getAll();
  }

  // @Get(':slug/products')
  // getProductsBySlug(@Param('slug') slug: string) {
  //   return this.productService.getProductsByCategorySlug(slug);
  // }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCategoryDto
  ) {
    return this.categoryService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.delete(id);
  }
}
