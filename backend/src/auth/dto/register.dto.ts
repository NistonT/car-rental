import { IsString } from 'class-validator';

export class RegisterAuthDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  patronymic: string;

  @IsString()
  email: string;

  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsString()
  avatar?: string;

  @IsString()
  license?: string;
}
