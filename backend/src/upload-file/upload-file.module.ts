import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UploadFileController } from './upload-file.controller';
import { UploadFileService } from './upload-file.service';

@Module({
  controllers: [UploadFileController],
  providers: [UploadFileService, PrismaService],
})
export class UploadFileModule {}
