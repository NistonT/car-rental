import { Body, Controller, Post } from '@nestjs/common';
import { AutoAdminService } from './auto-admin.service';
import { AutoAdminDto } from './dto/auto.dto';

@Controller('admin')
export class AutoAdminController {
  constructor(private readonly autoAdminService: AutoAdminService) {}

  @Post()
  async autoAdmin(@Body() dto: AutoAdminDto) {
    const admin = await this.autoAdminService.validateAdmin(dto);
    return await this.autoAdminService.autoAdmin(admin);
  }

  // Измение ролей
}
