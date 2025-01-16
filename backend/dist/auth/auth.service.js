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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateUser(login, pass) {
        const user = await this.prisma.user.findUnique({ where: { login } });
        if (user && bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = { username: user.login, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(userData) {
        const existingUserByEmail = await this.prisma.user.findUnique({
            where: { email: userData.email },
        });
        if (existingUserByEmail) {
            throw new common_1.ConflictException('Пользователь с таким email уже существует');
        }
        const existingUserByLogin = await this.prisma.user.findUnique({
            where: { login: userData.login },
        });
        if (existingUserByLogin) {
            throw new common_1.ConflictException('Пользователь с таким логином уже существует');
        }
        const hashedPassword = bcrypt.hashSync(userData.password, 10);
        const user = await this.prisma.user.create({
            data: {
                ...userData,
                password: hashedPassword,
            },
        });
        const { password, ...result } = user;
        return result;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map