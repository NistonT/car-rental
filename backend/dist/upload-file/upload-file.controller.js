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
exports.UploadFileController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const crypto_1 = require("crypto");
const multer_1 = require("multer");
const path_1 = require("path");
const update_dto_1 = require("./dto/update.dto");
const upload_file_service_1 = require("./upload-file.service");
let UploadFileController = class UploadFileController {
    constructor(uploadFileService) {
        this.uploadFileService = uploadFileService;
    }
    async findOne(id) {
        return await this.uploadFileService.findOne(id);
    }
    update(id, dto) {
        return this.uploadFileService.update(id, dto);
    }
    async updateAvatar(id, file) {
        return this.uploadFileService.updateAvatar(id, file);
    }
};
exports.UploadFileController = UploadFileController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateUploadDto]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: (0, path_1.join)(__dirname, '../../../', 'uploads', 'profile'),
            filename: (req, file, cb) => {
                const uniqueSuffix = (0, crypto_1.randomUUID)();
                const ext = (0, path_1.extname)(file.originalname);
                const fileName = `${uniqueSuffix}${ext}`;
                cb(null, fileName);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (file.mimetype === 'image/jpeg') {
                cb(null, true);
            }
            else {
                cb(new Error('Only JPEG are allowed'), false);
            }
        },
        limits: {
            fileSize: 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "updateAvatar", null);
exports.UploadFileController = UploadFileController = __decorate([
    (0, common_1.Controller)('upload-file'),
    __metadata("design:paramtypes", [upload_file_service_1.UploadFileService])
], UploadFileController);
//# sourceMappingURL=upload-file.controller.js.map