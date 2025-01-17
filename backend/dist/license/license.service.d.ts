import { PrismaService } from 'src/prisma.service';
export declare class LicenseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addLicense(id: string, license: string): Promise<{
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
    examinationLicense(license: string): Promise<string>;
}
