import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaService } from 'src/prisma.service';
import { UploadFileController } from './upload-file.controller';
import { UploadFileService } from './upload-file.service';

@Module({
  imports: [
    MulterModule.register({
      dest: '/uploads',
    }),
  ],
  controllers: [UploadFileController],
  providers: [UploadFileService, PrismaService],
})
export class UploadFileModule {}
