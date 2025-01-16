import { IsString } from 'class-validator';

export class AutoAdminDto {
  @IsString()
  login: string;

  @IsString()
  password: string;
}
