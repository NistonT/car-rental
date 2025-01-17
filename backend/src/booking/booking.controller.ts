import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Booking } from '@prisma/client';
import { BookingService } from './booking.service';
import { RegisterBookingDto } from './dto/register.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // Регистрация заявки на запись
  @Post()
  async registerBooking(@Body() dto: RegisterBookingDto): Promise<Booking> {
    return await this.bookingService.registerBooking(dto);
  }

  // Вывод всех услуг у пользователя
  @Get(':id_user')
  async getBookingUser(@Param('id_user') id: string): Promise<Booking[]> {
    return await this.bookingService.getBookingUser(id);
  }

  // Вывод всех услуг
  @Get()
  async getAllBooking(): Promise<Booking[]> {
    return await this.bookingService.getAllBooking();
  }

  // Удаление записи
  @Delete(':id')
  async deleteBooking(@Param('id') id: string): Promise<Booking> {
    return await this.bookingService.deleteBooking(id);
  }
}
