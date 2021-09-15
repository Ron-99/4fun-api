import { IsDate, IsNumber } from 'class-validator';

export class CreateSeasonDto {
  @IsNumber()
  number: number;

  @IsDate()
  initialDate: Date;

  @IsDate()
  finalDate: Date;

  @IsDate()
  finalDateSub: Date;

  @IsNumber()
  ranksId: number;

  @IsNumber()
  categoriesId: number;
}
