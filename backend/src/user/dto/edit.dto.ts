import { IsEmpty, IsString } from 'class-validator';

export class EditUserDto {
  @IsEmpty()
  @IsString()
  name?: string;

  @IsEmpty()
  @IsString()
  surname?: string;

  @IsEmpty()
  @IsString()
  patronymic?: string;

  @IsEmpty()
  @IsString()
  email?: string;

  @IsEmpty()
  @IsString()
  login?: string;

  @IsEmpty()
  @IsString()
  password?: string;

  @IsEmpty()
  @IsString()
  role?: string;

  @IsEmpty()
  @IsString()
  avatar?: string | null;

  @IsEmpty()
  @IsString()
  license?: string | null;
}
