import { faker } from '@faker-js/faker';
import { PrismaService, User } from '@food-delivery/prisma-client-user';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}

  async register(email: string, password: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        email,
        password: await hash(password),
        name: faker.person.firstName(),
        phone: faker.phone.number(),
        avatarPath: faker.image.avatar(),
      },
    });

    const tokens = this.issueTokens(user.id);

    return {
      ...tokens,
      user: this.getUserFields(user),
    };
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const tokens = this.issueTokens(user.id);

    return {
      ...tokens,
      user: this.getUserFields(user),
    };
  }

  async refreshToken(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken);

    if (!result) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: result.id },
    });

    const tokens = this.issueTokens(user.id);

    return {
      ...tokens,
      user: this.getUserFields(user),
    };
  }

  private async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isValid = await verify(user.password, password);

    if (!isValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return user;
  }

  private issueTokens(id: number) {
    const accessToken = this.jwt.sign({ id }, { expiresIn: '1d' });
    const refreshToken = this.jwt.sign({ id }, { expiresIn: '7d' });

    return { accessToken, refreshToken };
  }

  private getUserFields(user: User) {
    return {
      id: user.id,
      email: user.email,
    };
  }
}
