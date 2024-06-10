import { User } from '@food-delivery/prisma-client-user';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: keyof User, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const { user } = request;

    return data ? user[data] : user;
  }
);
