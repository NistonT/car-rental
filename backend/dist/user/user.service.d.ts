import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<({
        Booking: {
            id: string;
        }[];
    } & {
        id: string;
        surname: string;
        name: string;
        patronymic: string;
        email: string;
        login: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        avatar: string | null;
        license: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    })[]>;
    getId(id: string): Promise<{
        Booking: {
            id: string;
            user_id: string;
            vehicle_id: string;
            booking_date: Date;
            duration: number;
        }[];
    } & {
        id: string;
        surname: string;
        name: string;
        patronymic: string;
        email: string;
        login: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        avatar: string | null;
        license: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
