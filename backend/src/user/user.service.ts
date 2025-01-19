import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { EditUserDto } from './dto/edit.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Вывод всех пользователей
  async getAll(): Promise<User[]> {
    return await this.prisma.user.findMany({
      include: {
        Booking: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  // Вывод пользователя по индетификатору
  async getId(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        Booking: true,
      },
    });
  }

  // Редактирование пользователя
  async editUser(id: string, dto: EditUserDto): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        Booking: true,
      },
    });

    return await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: dto.name,
        surname: dto.surname,
        patronymic: dto.patronymic,
        email: dto.email,
        password: dto.password,
        login: dto.login,
        avatar: dto.avatar,
        license: dto.license,
      },
    });
  }

  // удаление пользователя
  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }

    return await this.prisma.user.delete({
      where: { id },
    });
  }

  async deleteAllUser() {
    return await this.prisma.user.deleteMany();
  }
}
