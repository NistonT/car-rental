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
exports.AutoAdminService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma.service");
let AutoAdminService = class AutoAdminService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateAdmin(dto) {
        const admin = await this.prisma.user.findUnique({
            where: { login: dto.login },
        });
        if (admin.role !== 'Admin') {
            throw new common_1.UnauthorizedException('Пользователь не является администратором');
        }
        if (admin && (await bcrypt.compare(dto.password, admin.password))) {
            const { password, ...result } = admin;
            return result;
        }
        return null;
    }
    async autoAdmin(admin) {
        const payload = { login: admin.login, sub: admin.id, role: admin.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async editRole(id, newRole) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return await this.prisma.user.update({
            where: { id: user.id },
            data: {
                role: newRole === client_1.Role.Admin ? client_1.Role.Admin : client_1.Role.User,
            },
        });
    }
};
exports.AutoAdminService = AutoAdminService;
exports.AutoAdminService = AutoAdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AutoAdminService);
//# sourceMappingURL=auto-admin.service.js.map