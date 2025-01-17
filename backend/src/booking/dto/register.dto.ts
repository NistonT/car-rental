import { IsDate, IsNumber, IsString } from 'class-validator';

export class RegisterBookingDto {
  @IsString()
  id_user: string;

  @IsString()
  id_vehicle: string;

  @IsDate()
  date: Date;

  @IsNumber()
  duration: number;
}
