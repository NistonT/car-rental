import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { EditUserDto } from './dto/edit.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<User[]>;
    getId(id: string): Promise<User>;
    editUser(id: string, dto: EditUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
