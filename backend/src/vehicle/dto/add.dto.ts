import { IsString } from 'class-validator';

export class AddVehicleDto {
  @IsString()
  type: string;

  @IsString()
  make: string;

  @IsString()
  year: number;

  @IsString()
  description: string;
}
