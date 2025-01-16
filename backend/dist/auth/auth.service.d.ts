import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(login: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(userData: any): Promise<{
        id: string;
        surname: string;
        name: string;
        patronymic: string;
        email: string;
        login: string;
        role: import(".prisma/client").$Enums.Role;
        avatar: string | null;
        license: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
