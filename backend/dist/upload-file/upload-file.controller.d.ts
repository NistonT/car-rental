import { UploadFileService } from './upload-file.service';
export declare class UploadFileController {
    private readonly uploadFileService;
    constructor(uploadFileService: UploadFileService);
    uploadedFile(file: any, id: string): Promise<{
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
