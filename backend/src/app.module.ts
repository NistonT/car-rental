import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { AutoAdminModule } from './auto-admin/auto-admin.module';
import { LicenseModule } from './license/license.module';
import { PrismaService } from './prisma.service';
import { UploadFileModule } from './upload-file/upload-file.module';
import { UserModule } from './user/user.module';

@Module({
  providers: [PrismaService, JwtService],
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AutoAdminModule,
    UploadFileModule,
    LicenseModule,
  ],
})
export class AppModule {}
