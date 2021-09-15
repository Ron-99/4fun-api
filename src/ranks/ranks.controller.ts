import { Body, Controller, Post } from '@nestjs/common';
import { CreateRankDto } from './dtos/create-rank.dto';
import { RanksService } from './ranks.service';

@Controller('ranks')
export class RanksController {
  constructor(private ranksService: RanksService) {}

  @Post()
  create(@Body() rankDto: CreateRankDto) {
    return this.ranksService.Create(rankDto);
  }
}
