import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { IAdmin } from './auto-admin.type';
import { AutoAdminDto } from './dto/auto.dto';
export declare class AutoAdminService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateAdmin(dto: AutoAdminDto): Promise<{
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
    autoAdmin(admin: IAdmin): Promise<{
        access_token: string;
    }>;
    editRole(id: string, newRole: string): Promise<{
        license: string | null;
        login: string;
        password: string;
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
}
