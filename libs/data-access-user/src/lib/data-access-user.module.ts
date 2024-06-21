import {
  PrismaClientUserModule,
  PrismaService,
} from '@food-delivery/prisma-client-user';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Module({
  imports: [PrismaClientUserModule],
  providers: [AuthService, UserService, PrismaService, JwtService],
  exports: [AuthService, UserService],
})
export class DataAccessUserModule {}
