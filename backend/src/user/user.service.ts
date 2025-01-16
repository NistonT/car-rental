import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
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

  async getId(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        Booking: true,
      },
    });
  }
}
