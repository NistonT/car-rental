import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { randomUUID } from 'crypto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UpdateUploadDto } from './dto/update.dto';
import { UploadFileService } from './upload-file.service';

@Controller('upload-file')
export class UploadFileController {
  constructor(private readonly uploadFileService: UploadFileService) {}

  // Вывод пользователя по идентификатору
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.uploadFileService.findOne(id);
  }

  // Изменение данных у пользователя
  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() dto: UpdateUploadDto) {
    return this.uploadFileService.update(id, dto);
  }

  // Загрузка фотографии у пользователя
  @Post(':id/avatar')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = randomUUID();
          const ext = extname(file.originalname);
          const fileName = `${uniqueSuffix}${ext}`;
          cb(null, `profile/${fileName}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
          cb(null, true);
        } else {
          cb(new Error('Only images are allowed'), false);
        }
      },
    }),
  )
  async updateAvatar(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.uploadFileService.updateAvatar(id, file);
  }
}
