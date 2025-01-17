import { User } from '@prisma/client';
import { EditUserDto } from './dto/edit.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    getId(id: string): Promise<User>;
    editUser(id: string, dto: EditUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
