import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AutoAdminController } from './auto-admin.controller';
import { AutoAdminService } from './auto-admin.service';

@Module({
  controllers: [AutoAdminController],
  providers: [AutoAdminService, PrismaService, JwtService],
})
export class AutoAdminModule {}
