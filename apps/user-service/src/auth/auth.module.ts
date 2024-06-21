import { DataAccessUserModule } from '@food-delivery/data-access-user';
import { PrismaService } from '@food-delivery/prisma-client-user';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService
      ): Promise<JwtModuleOptions> => ({
        secret: configService.get('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
    DataAccessUserModule,
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, PrismaService],
})
export class AuthModule {}
