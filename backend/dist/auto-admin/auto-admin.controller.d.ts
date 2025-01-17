import { AutoAdminService } from './auto-admin.service';
import { IAdmin } from './auto-admin.type';
import { AutoAdminDto } from './dto/auto.dto';
import { TokenAutoAdminDto } from './dto/token.dto';
export declare class AutoAdminController {
    private readonly autoAdminService;
    constructor(autoAdminService: AutoAdminService);
    autoAdmin(dto: AutoAdminDto): Promise<TokenAutoAdminDto>;
    editRole(id: string, role: string): Promise<IAdmin>;
}
