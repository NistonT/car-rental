import { PrismaService } from 'src/prisma.service';
export declare enum FileType {
    IMAGE = "image"
}
export declare class UploadFileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateAvatarNew(id: string, file: any): Promise<{
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
