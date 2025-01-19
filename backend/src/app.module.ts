import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { AuthModule } from './auth/auth.module';
import { AutoAdminModule } from './auto-admin/auto-admin.module';
import { BookingModule } from './booking/booking.module';
import { LicenseModule } from './license/license.module';
import { PrismaService } from './prisma.service';
import { UploadFileModule } from './upload-file/upload-file.module';
import { UserModule } from './user/user.module';
import { VehicleModule } from './vehicle/vehicle.module';

const uploadsPath = resolve(__dirname, '..', 'uploads');
if (!existsSync(uploadsPath)) {
  mkdirSync(uploadsPath, { recursive: true });
}
@Module({
  providers: [PrismaService, JwtService],
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AutoAdminModule,
    UploadFileModule,
    LicenseModule,
    VehicleModule,
    BookingModule,
    ServeStaticModule.forRoot({
      rootPath: uploadsPath,
      serveRoot: '/uploads',
    }),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
})
export class AppModule {}
