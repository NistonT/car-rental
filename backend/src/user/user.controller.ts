import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { EditUserDto } from './dto/edit.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Полученние всех пользователей
  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  // Полученние пользователя по id
  @Get(':id')
  async getId(@Param('id') id: string): Promise<User> {
    return await this.userService.getId(id);
  }

  // Редактированние пользователя по id
  @Put(':id')
  async editUser(
    @Param('id') id: string,
    @Body() dto: EditUserDto,
  ): Promise<User> {
    return await this.userService.editUser(id, dto);
  }

  // Удаление пользователя
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    try {
      return await this.userService.deleteUser(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }

  @Delete('all')
  async deleteAllUser() {
    return await this.userService.deleteAllUser();
  }
}
