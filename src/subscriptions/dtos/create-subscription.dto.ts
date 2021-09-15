import { IsInt } from 'class-validator';

export class createSubscriptionDto {
  @IsInt()
  driverId: number;

  @IsInt()
  seasonId: number;
}
