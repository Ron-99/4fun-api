import { IsInt, IsString, Max } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  @Max(50)
  nickName: string;

  @IsString()
  @Max(3)
  number: string;

  @IsInt()
  penaltyId: number;
}
