import { IsDate, IsNumber, IsString } from 'class-validator';

export class RegisterBookingDto {
  @IsString()
  user_id: string;

  @IsString()
  vehicle_id: string;

  @IsDate()
  date: Date;

  @IsNumber()
  duration: number;
}
