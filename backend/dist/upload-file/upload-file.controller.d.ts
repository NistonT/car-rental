import { UpdateUploadDto } from './dto/update.dto';
import { UploadFileService } from './upload-file.service';
export declare class UploadFileController {
    private readonly uploadFileService;
    constructor(uploadFileService: UploadFileService);
    findOne(id: string): Promise<{
        name: string;
        id: string;
        surname: string;
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
    update(id: string, dto: UpdateUploadDto): Promise<{
        name: string;
        id: string;
        surname: string;
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
    updateAvatar(id: string, file: Express.Multer.File): Promise<{
        name: string;
        id: string;
        surname: string;
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
