"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const uploadsPath = (0, path_1.join)(__dirname, '../uploads');
    app.useStaticAssets(uploadsPath);
    app.setGlobalPrefix('/api');
    app.useStaticAssets(uploadsPath, {
        prefix: '/uploads',
    });
    app.enableCors();
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map