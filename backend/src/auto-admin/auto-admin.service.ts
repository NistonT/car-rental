import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { IAdmin } from './auto-admin.type';
import { AutoAdminDto } from './dto/auto.dto';

@Injectable()
export class AutoAdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAdmin(dto: AutoAdminDto) {
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

  async autoAdmin(admin: IAdmin) {
    const payload = { login: admin.login, sub: admin.id, role: admin.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
