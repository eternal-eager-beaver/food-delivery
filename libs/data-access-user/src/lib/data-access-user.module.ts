import { PrismaClientUserModule } from '@food-delivery/prisma-client-user';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Module({
  imports: [PrismaClientUserModule],
  providers: [AuthService, UserService],
  exports: [AuthService, UserService],
})
export class DataAccessUserModule {}
