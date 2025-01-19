"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileService = exports.FileType = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const prisma_service_1 = require("../prisma.service");
var FileType;
(function (FileType) {
    FileType["IMAGE"] = "image";
})(FileType || (exports.FileType = FileType = {}));
let UploadFileService = class UploadFileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updateAvatarNew(id, file) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        if (user.avatar &&
            user.avatar !== null &&
            user.avatar.startsWith('http://localhost:3000/')) {
            try {
                const oldFilePath = (0, path_1.resolve)(process.cwd(), user.avatar.substring('http://localhost:3000/'.length));
                console.log(oldFilePath);
                console.log((0, fs_1.existsSync)(oldFilePath));
                if ((0, fs_1.existsSync)(oldFilePath)) {
                    (0, fs_1.unlinkSync)(oldFilePath);
                    console.log('Старая фотография удалена:', oldFilePath);
                }
            }
            catch (error) {
                console.error('Ошибка при удалении старой фотографии:', error);
            }
        }
        return await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                avatar: `http://localhost:3000/${file.path}`,
            },
        });
    }
};
exports.UploadFileService = UploadFileService;
exports.UploadFileService = UploadFileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UploadFileService);
//# sourceMappingURL=upload-file.service.js.map