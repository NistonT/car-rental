import { User } from '@prisma/client';
import { UpdateUploadDto } from './dto/update.dto';
import { UploadFileService } from './upload-file.service';
export declare class UploadFileController {
    private readonly uploadFileService;
    constructor(uploadFileService: UploadFileService);
    findOne(id: string): Promise<User>;
    update(id: string, dto: UpdateUploadDto): Promise<User>;
    updateAvatar(id: string, file: Express.Multer.File): Promise<User>;
}
