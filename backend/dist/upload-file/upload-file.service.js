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
exports.UploadFileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let UploadFileService = class UploadFileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOne(id) {
        return await this.prisma.user.findUnique({ where: { id } });
    }
    async update(id, dto) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        return await this.prisma.user.update({
            where: { id: user.id },
            data: { ...dto },
        });
    }
    async updateAvatar(id, file) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        const avatarUrl = `/uploads/profile/${file.filename}`;
        await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                avatar: avatarUrl,
            },
        });
        return this.prisma.user.findUnique({ where: { id } });
    }
};
exports.UploadFileService = UploadFileService;
exports.UploadFileService = UploadFileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UploadFileService);
//# sourceMappingURL=upload-file.service.js.map