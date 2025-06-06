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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return await this.prisma.user.findMany({
            include: {
                Booking: {
                    select: {
                        id: true,
                    },
                },
            },
        });
    }
    async getId(id) {
        return await this.prisma.user.findUnique({
            where: { id },
            include: {
                Booking: true,
            },
        });
    }
    async editUser(id, dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                Booking: true,
            },
        });
        return await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                name: dto.name,
                surname: dto.surname,
                patronymic: dto.patronymic,
                email: dto.email,
                password: dto.password,
                login: dto.login,
                avatar: dto.avatar,
                license: dto.license,
            },
        });
    }
    async deleteUser(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID "${id}" not found`);
        }
        return await this.prisma.user.delete({
            where: { id },
        });
    }
    async deleteAllUser() {
        return await this.prisma.user.deleteMany();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map