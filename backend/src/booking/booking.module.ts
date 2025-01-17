import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  controllers: [BookingController],
  providers: [BookingService, PrismaService],
})
export class BookingModule {}
