import { IsJSON } from 'class-validator';

export class TokenAutoAdminDto {
  @IsJSON()
  access_token: string;
}
