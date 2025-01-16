"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoAdminModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma.service");
const auto_admin_controller_1 = require("./auto-admin.controller");
const auto_admin_service_1 = require("./auto-admin.service");
let AutoAdminModule = class AutoAdminModule {
};
exports.AutoAdminModule = AutoAdminModule;
exports.AutoAdminModule = AutoAdminModule = __decorate([
    (0, common_1.Module)({
        controllers: [auto_admin_controller_1.AutoAdminController],
        providers: [auto_admin_service_1.AutoAdminService, prisma_service_1.PrismaService, jwt_1.JwtService],
    })
], AutoAdminModule);
//# sourceMappingURL=auto-admin.module.js.map