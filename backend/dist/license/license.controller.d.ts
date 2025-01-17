import { LicenseService } from './license.service';
export declare class LicenseController {
    private readonly licenseService;
    constructor(licenseService: LicenseService);
    license(id: string, license: string): Promise<{
        id: string;
        surname: string;
        name: string;
        patronymic: string;
        email: string;
        login: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        avatar: string | null;
        license: string | null;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
