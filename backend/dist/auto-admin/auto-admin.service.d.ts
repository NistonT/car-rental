import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { IAdmin } from './auto-admin.type';
import { AutoAdminDto } from './dto/auto.dto';
export declare class AutoAdminService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateAdmin(dto: AutoAdminDto): Promise<{
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
    autoAdmin(admin: IAdmin): Promise<{
        access_token: string;
    }>;
}
