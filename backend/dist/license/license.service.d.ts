import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class LicenseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addLicense(id: string, license: string): Promise<User>;
    examinationLicense(license: string): Promise<string>;
}
