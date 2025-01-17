import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { IAdmin } from './auto-admin.type';
import { AutoAdminDto } from './dto/auto.dto';
import { TokenAutoAdminDto } from './dto/token.dto';
export declare class AutoAdminService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateAdmin(dto: AutoAdminDto): Promise<IAdmin | null>;
    autoAdmin(admin: IAdmin): Promise<TokenAutoAdminDto>;
    editRole(id: string, newRole: string): Promise<IAdmin>;
}
