import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateUploadDto } from './dto/update.dto';

@Injectable()
export class UploadFileService {
  constructor(private readonly prisma: PrismaService) {}

  // Вывод пользователя по идентификатору
  async findOne(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  // Обновленние данных у пользователя
  async update(id: string, dto: UpdateUploadDto): Promise<User> {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    return await this.prisma.user.update({
      where: { id: user.id },
      data: { ...dto },
    });
  }

  // Обновленние фотографии у пользователя
  async updateAvatar(id: string, file: Express.Multer.File): Promise<User> {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    const avatarUrl = `/uploads/${file.filename}`;

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        avatar: avatarUrl,
      },
    });

    return this.prisma.user.findUnique({ where: { id } });
  }
}
