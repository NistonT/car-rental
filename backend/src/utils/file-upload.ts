import { HttpException, HttpStatus } from '@nestjs/common';
import { extname } from 'path';
// Разрешить только изображения
export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg)$/)) {
    return callback(
      new HttpException('Неверный формат файла', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  if (file.size > 1024 * 1024) {
    return callback(
      new HttpException('Файл должен быть меньше 1MB', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  callback(null, true);
};
export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 10).toString(10))
    .join('');
  callback(null, `${name}${randomName}${fileExtName}`);
};
