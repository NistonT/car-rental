import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { AutoAdminService } from './auto-admin.service';
import { AutoAdminDto } from './dto/auto.dto';

@Controller('admin')
export class AutoAdminController {
  constructor(private readonly autoAdminService: AutoAdminService) {}

  // Авторизация администратора
  @Post('auto')
  async autoAdmin(@Body() dto: AutoAdminDto) {
    const admin = await this.autoAdminService.validateAdmin(dto);
    return await this.autoAdminService.autoAdmin(admin);
  }

  // Измение ролей
  @Post('role/:id')
  async editRole(@Param('id') id: string, @Query('role') role: string) {
    return await this.autoAdminService.editRole(id, role);
  }
}
