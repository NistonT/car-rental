import { User } from '@prisma/client';
import { LicenseService } from './license.service';
export declare class LicenseController {
    private readonly licenseService;
    constructor(licenseService: LicenseService);
    license(id: string, license: string): Promise<User>;
}
