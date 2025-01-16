import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { login } });
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userData: any) {
    const existingUserByEmail = await this.prisma.user.findUnique({
      where: { email: userData.email },
    });
    if (existingUserByEmail) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    const existingUserByLogin = await this.prisma.user.findUnique({
      where: { login: userData.login },
    });
    if (existingUserByLogin) {
      throw new ConflictException(
        'Пользователь с таким логином уже существует',
      );
    }

    const hashedPassword = bcrypt.hashSync(userData.password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });

    const { password, ...result } = user;
    return result;
  }
}
