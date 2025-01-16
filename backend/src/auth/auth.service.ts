import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { IUser } from './auth.type';
import { CheckAutoDto } from './dto/check.dto';
import { LoginValidateAuthDto } from './dto/login.dto';
import { RegisterAuthDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterAuthDto) {
    const existingUsersByEmail = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existingUsersByEmail) {
      throw new ConflictException('Пользователь с такой почтой уже существует');
    }

    const existingUsersByLogin = await this.prisma.user.findUnique({
      where: {
        login: dto.login,
      },
    });

    if (existingUsersByLogin) {
      throw new ConflictException(
        'Пользователь с таким логином уже существует',
      );
    }

    const hashedPassword = bcrypt.hashSync(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
    });

    const { password, ...result } = user;
    return result;
  }

  async validateUser(dto: LoginValidateAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { login: dto.login },
    });
    if (user && (await bcrypt.compare(dto.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: IUser) {
    const payload = { username: user.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async checkUser(dto: CheckAutoDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: dto.id,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }

    try {
      const payload = this.jwtService.verify(dto.token);
      if (payload.sub !== user.id) {
        throw new UnauthorizedException('Токен не принадлежит пользователю');
      }

      return payload;
    } catch (error) {
      throw new UnauthorizedException('Невалидный токен');
    }
  }
}
