import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

import { DataAccessUserModule } from '@food-delivery/data-access-user';

@Module({
  imports: [DataAccessUserModule],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
