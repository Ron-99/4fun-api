import { IsDecimal, IsString, Max } from 'class-validator';

export class CreatePenaltyDto {
  @IsDecimal()
  level: number;

  @IsString()
  @Max(7)
  color: string;

  @IsString()
  @Max(70)
  description: string;
}
