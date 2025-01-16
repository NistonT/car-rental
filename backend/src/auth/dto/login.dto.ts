import { IsString } from 'class-validator';

export class LoginValidateAuthDto {
  @IsString()
  login: string;

  @IsString()
  password: string;
}
