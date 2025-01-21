import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { IUser } from './auth.type';
import { LoginValidateAuthDto } from './dto/login.dto';
import { RegisterAuthDto } from './dto/register.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterAuthDto): Promise<{
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
    validateUser(dto: LoginValidateAuthDto): Promise<{
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
    login(user: IUser): Promise<{
        access_token: string;
    }>;
    checkUser(token: string): Promise<any>;
}
