import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';

import { DataAccessProductModule } from '@food-delivery/data-access-product';

@Module({
  imports: [DataAccessProductModule],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule {}
