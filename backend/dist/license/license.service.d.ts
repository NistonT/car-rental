import { PrismaService } from 'src/prisma.service';
export declare class LicenseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addLicense(id: string, license: string): Promise<{
        login: string;
        password: string;
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
    examinationLicense(license: string): Promise<string>;
}
