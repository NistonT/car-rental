import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const uploadsPath = join(__dirname, '../', 'uploads');
  app.useStaticAssets(uploadsPath);
  app.setGlobalPrefix('/api');
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);

  console.log(`upload path ${uploadsPath}`);
}
bootstrap();
