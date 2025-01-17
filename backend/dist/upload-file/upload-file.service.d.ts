import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateUploadDto } from './dto/update.dto';
export declare class UploadFileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(id: string): Promise<User | null>;
    update(id: string, dto: UpdateUploadDto): Promise<User>;
    updateAvatar(id: string, file: Express.Multer.File): Promise<User>;
}
