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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoAdminController = void 0;
const common_1 = require("@nestjs/common");
const auto_admin_service_1 = require("./auto-admin.service");
const auto_dto_1 = require("./dto/auto.dto");
let AutoAdminController = class AutoAdminController {
    constructor(autoAdminService) {
        this.autoAdminService = autoAdminService;
    }
    async autoAdmin(dto) {
        const admin = await this.autoAdminService.validateAdmin(dto);
        return await this.autoAdminService.autoAdmin(admin);
    }
    async editRole(id, role) {
        return await this.autoAdminService.editRole(id, role);
    }
};
exports.AutoAdminController = AutoAdminController;
__decorate([
    (0, common_1.Post)('auto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auto_dto_1.AutoAdminDto]),
    __metadata("design:returntype", Promise)
], AutoAdminController.prototype, "autoAdmin", null);
__decorate([
    (0, common_1.Post)('role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AutoAdminController.prototype, "editRole", null);
exports.AutoAdminController = AutoAdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [auto_admin_service_1.AutoAdminService])
], AutoAdminController);
//# sourceMappingURL=auto-admin.controller.js.map