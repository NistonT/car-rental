import { AuthService } from './auth.service';
import { CheckAutoDto } from './dto/check.dto';
import { LoginValidateAuthDto } from './dto/login.dto';
import { RegisterAuthDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterAuthDto): Promise<{
        login: string;
        name: string;
        surname: string;
        patronymic: string;
        email: string;
        avatar: string | null;
        license: string | null;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    login(dto: LoginValidateAuthDto): Promise<{
        access_token: string;
    }>;
    checkUser(dto: CheckAutoDto): Promise<any>;
}
