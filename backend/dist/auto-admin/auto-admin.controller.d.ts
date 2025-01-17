import { AutoAdminService } from './auto-admin.service';
import { AutoAdminDto } from './dto/auto.dto';
export declare class AutoAdminController {
    private readonly autoAdminService;
    constructor(autoAdminService: AutoAdminService);
    autoAdmin(dto: AutoAdminDto): Promise<{
        access_token: string;
    }>;
    editRole(id: string, role: string): Promise<{
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
