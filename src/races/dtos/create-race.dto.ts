import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateRaceDto {
  @IsDate()
  dateRace: Date;

  @IsNumber()
  points: number;

  @IsString()
  bestTime: string;

  @IsNumber()
  driver: number;

  @IsNumber()
  track: number;

  @IsNumber()
  season: number;
}
