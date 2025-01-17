import { Booking } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { RegisterBookingDto } from './dto/register.dto';
export declare class BookingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    registerBooking(dto: RegisterBookingDto): Promise<Booking>;
    getBookingUser(id: string): Promise<Booking[]>;
    getAllBooking(): Promise<Booking[]>;
    deleteBooking(id: string): Promise<Booking>;
}
