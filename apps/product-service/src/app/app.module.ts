import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { ProductModule } from '../product/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().port(),
        DATABASE_HOST: Joi.string().hostname(),
        DATABASE_PORT: Joi.number().port().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
