"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.imageFileFilter = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg)$/)) {
        return callback(new common_1.HttpException('Неверный формат файла', common_1.HttpStatus.BAD_REQUEST), false);
    }
    if (file.size > 1024 * 1024) {
        return callback(new common_1.HttpException('Файл должен быть меньше 1MB', common_1.HttpStatus.BAD_REQUEST), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 10).toString(10))
        .join('');
    callback(null, `${name}${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=file-upload.js.map