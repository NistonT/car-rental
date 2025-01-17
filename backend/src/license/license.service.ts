import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LicenseService {
  constructor(private readonly prisma: PrismaService) {}

  async addLicense(id: string, license: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID '${id}' not found`);
    }

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        license,
      },
    });
  }

  async examinationLicense(license: string): Promise<string> {
    if (license.length !== 10 || /\s/.test(license)) {
      throw new BadRequestException(
        'Номер лицензии должен быть без пробелов и содержать 10 символов',
      );
    }
    const numberLicense = Number(license);
    if (isNaN(numberLicense)) {
      throw new BadRequestException('Номер лицензии должен быть числом');
    }
    return license;
  }
}
