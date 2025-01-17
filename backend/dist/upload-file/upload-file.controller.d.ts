import { UpdateUploadDto } from './dto/update.dto';
import { UploadFileService } from './upload-file.service';
export declare class UploadFileController {
    private readonly uploadFileService;
    constructor(uploadFileService: UploadFileService);
    findOne(id: string): Promise<{
        license: string | null;
        login: string;
        password: string;
        name: string;
        surname: string;
        patronymic: string;
        email: string;
        avatar: string | null;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    update(id: string, dto: UpdateUploadDto): Promise<{
        license: string | null;
        login: string;
        password: string;
        name: string;
        surname: string;
        patronymic: string;
        email: string;
        avatar: string | null;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    updateAvatar(id: string, file: Express.Multer.File): Promise<{
        license: string | null;
        login: string;
        password: string;
        name: string;
        surname: string;
        patronymic: string;
        email: string;
        avatar: string | null;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
