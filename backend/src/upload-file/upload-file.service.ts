import { Injectable, NotFoundException } from '@nestjs/common';
import { existsSync, unlinkSync } from 'fs';
import { resolve } from 'path';
import { PrismaService } from 'src/prisma.service';

export enum FileType {
  IMAGE = 'image',
}
@Injectable()
export class UploadFileService {
  constructor(private readonly prisma: PrismaService) {}
  async updateAvatarNew(id: string, file) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    if (
      user.avatar &&
      user.avatar !== null &&
      user.avatar.startsWith('http://localhost:3000/')
    ) {
      try {
        const oldFilePath = resolve(
          process.cwd(),
          user.avatar.substring('http://localhost:3000/'.length),
        );
        console.log(oldFilePath);
        console.log(existsSync(oldFilePath));
        if (existsSync(oldFilePath)) {
          unlinkSync(oldFilePath);
          console.log('Старая фотография удалена:', oldFilePath);
        }
      } catch (error) {
        console.error('Ошибка при удалении старой фотографии:', error);
      }
    }

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        avatar: `http://localhost:3000/${file.path}`,
      },
    });
  }
}
