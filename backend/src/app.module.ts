import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { AutoAdminModule } from './auto-admin/auto-admin.module';

@Module({
  providers: [PrismaService, JwtService],
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), UserModule, AutoAdminModule],
})
export class AppModule {}
