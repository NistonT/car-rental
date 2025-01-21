import { Injectable, NotFoundException } from '@nestjs/common';
import { Booking } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { RegisterBookingDto } from './dto/register.dto';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}

  // Регистрация заявки
  async registerBooking(dto: RegisterBookingDto): Promise<Booking> {
    console.log(dto);

    const user = await this.prisma.user.findUnique({
      where: { id: dto.user_id },
    });

    if (!user) {
      throw new NotFoundException(
        `Пользователь с таким ${dto.user_id} не найден`,
      );
    }

    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: dto.vehicle_id },
    });

    if (!vehicle) {
      throw new NotFoundException(
        `Транспорт с таким ${dto.vehicle_id} не найден`,
      );
    }

    return await this.prisma.booking.create({
      data: {
        user_id: user.id,
        vehicle_id: vehicle.id,
        booking_date: dto.date,
        duration: dto.duration,
      },
    });
  }
  // Вывод всех заявок у пользователей
  async getBookingUser(id: string): Promise<Booking[]> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return await this.prisma.booking.findMany({ where: { user_id: user.id } });
  }

  // Вывод всех заявок
  async getAllBooking(): Promise<Booking[]> {
    return await this.prisma.booking.findMany();
  }

  // Удаление заявок
  async deleteBooking(id: string): Promise<Booking> {
    return await this.prisma.booking.delete({ where: { id } });
  }
}
