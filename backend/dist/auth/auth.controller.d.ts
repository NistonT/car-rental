import { AuthService } from './auth.service';
import { LoginValidateAuthDto } from './dto/login.dto';
import { RegisterAuthDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    login(dto: LoginValidateAuthDto): Promise<{
        access_token: string;
    }>;
    checkUser(authorizationHeader: string): Promise<any>;
}
