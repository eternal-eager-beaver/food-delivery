import { Controller, Get } from '@nestjs/common';
import { Auth } from '../auth/auth.decorator';
import { CurrentUser } from '../auth/user.decorator';

import { UserService } from '@food-delivery/data-access-user';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth()
  @Get('current')
  getCurrentUser(@CurrentUser('id') userId: number) {
    return this.userService.getById(userId);
  }

  // @Auth()
  // @Patch('current/favorites/:productId')
  // toggleFavorite(
  //   @CurrentUser('id') userId: number,
  //   @Param('productId', ParseIntPipe) productId: number
  // ) {
  //   return this.userService.toggleFavorite(userId, productId);
  // }
}
