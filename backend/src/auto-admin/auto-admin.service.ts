import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { IAdmin } from './auto-admin.type';
import { AutoAdminDto } from './dto/auto.dto';
import { TokenAutoAdminDto } from './dto/token.dto';

@Injectable()
export class AutoAdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // Проверка на валидность администратора
  async validateAdmin(dto: AutoAdminDto): Promise<IAdmin | null> {
    const admin = await this.prisma.user.findUnique({
      where: { login: dto.login },
    });

    if (admin.role !== 'Admin') {
      throw new UnauthorizedException(
        'Пользователь не является администратором',
      );
    }

    if (admin && (await bcrypt.compare(dto.password, admin.password))) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }

  // Авторизация администратора
  async autoAdmin(admin: IAdmin): Promise<TokenAutoAdminDto> {
    const payload = { login: admin.login, sub: admin.id, role: admin.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Редактированние ролей
  async editRole(id: string, newRole: string): Promise<IAdmin> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return await this.prisma.user.update({
      where: { id: user.id },
      data: {
        role: newRole === Role.Admin ? Role.Admin : Role.User,
      },
    });
  }
}
