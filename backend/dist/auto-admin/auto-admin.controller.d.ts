import { AutoAdminService } from './auto-admin.service';
import { AutoAdminDto } from './dto/auto.dto';
export declare class AutoAdminController {
    private readonly autoAdminService;
    constructor(autoAdminService: AutoAdminService);
    autoAdmin(dto: AutoAdminDto): Promise<{
        access_token: string;
    }>;
}
