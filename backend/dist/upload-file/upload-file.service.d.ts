import { PrismaService } from 'src/prisma.service';
export declare enum FileType {
    IMAGE = "image"
}
export declare class UploadFileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateAvatarNew(id: string, file: any): Promise<{
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
}
