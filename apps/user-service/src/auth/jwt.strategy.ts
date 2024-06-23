import { PrismaService, User } from '@food-delivery/prisma-client-user';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService
  ) {
    const jwtSecret = configService.getOrThrow('JWT_SECRET');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtSecret,
    });
  }

  validate({ id }: Pick<User, 'id'>) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
