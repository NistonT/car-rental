import { IsEmpty, IsString } from 'class-validator';

export class EditVehicleDto {
  @IsEmpty()
  @IsString()
  type?: string;

  @IsEmpty()
  @IsString()
  make?: string;

  @IsEmpty()
  @IsString()
  year?: number;

  @IsEmpty()
  @IsString()
  description?: string;
}
