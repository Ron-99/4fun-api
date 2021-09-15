import { Body, Controller, Post } from '@nestjs/common';
import { CreatePenaltyDto } from './dtos/create-penalty.dto';
import { PenaltiesService } from './penalties.service';

@Controller('penalties')
export class PenaltiesController {
  constructor(private penaltiesService: PenaltiesService) {}

  @Post()
  create(@Body() penaltyDto: CreatePenaltyDto) {
    return this.penaltiesService.create(penaltyDto);
  }
}
