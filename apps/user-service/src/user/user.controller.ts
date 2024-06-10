import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { Auth } from '../auth/auth.decorator';
import { CurrentUser } from '../auth/user.decorator';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth()
  @Get('current')
  getProfile(@CurrentUser('id') userId: number) {
    return this.userService.getById(userId);
  }

  @Auth()
  @Patch('current/favorites/:productId')
  toggleFavorite(
    @CurrentUser('id') userId: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.userService.toggleFavorite(userId, productId);
  }
}
