import { Booking } from '@prisma/client';
import { BookingService } from './booking.service';
import { RegisterBookingDto } from './dto/register.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    registerBooking(dto: RegisterBookingDto): Promise<Booking>;
    getBookingUser(id: string): Promise<Booking[]>;
    getAllBooking(): Promise<Booking[]>;
    deleteBooking(id: string): Promise<Booking>;
}
