import {
  Body,
  Controller,
  HttpException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { LicenseService } from './license.service';

@Controller('license')
export class LicenseController {
  constructor(private readonly licenseService: LicenseService) {}

  // Добавлние лицензии
  @Post(':id')
  @UsePipes(new ValidationPipe())
  async license(
    @Param('id') id: string,
    @Body('license') license: string,
  ): Promise<User> {
    try {
      const validatedLicense =
        await this.licenseService.examinationLicense(license);
      const add = await this.licenseService.addLicense(id, validatedLicense);
      return add;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new Error('Произошла ошибка при обработке лицензии');
    }
  }
}
