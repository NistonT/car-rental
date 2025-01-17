import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { IUser } from './auth.type';
import { CheckAutoDto } from './dto/check.dto';
import { LoginValidateAuthDto } from './dto/login.dto';
import { RegisterAuthDto } from './dto/register.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterAuthDto): Promise<{
        license: string | null;
        login: string;
        name: string;
        surname: string;
        patronymic: string;
        email: string;
        avatar: string | null;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    validateUser(dto: LoginValidateAuthDto): Promise<{
        license: string | null;
        login: string;
        name: string;
        surname: string;
        patronymic: string;
        email: string;
        avatar: string | null;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    login(user: IUser): Promise<{
        access_token: string;
    }>;
    checkUser(dto: CheckAutoDto): Promise<any>;
}
