import { Body, Controller, Get, Optional, Post, Query } from '@nestjs/common';
import { PenaltiesService } from 'src/penalties/penalties.service';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dtos/create-driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(
    private driversService: DriversService,
    private penaltiesService: PenaltiesService,
  ) {}

  @Post()
  async create(@Body() driverDto: CreateDriverDto) {
    const penalty = await this.penaltiesService.findById(driverDto.penaltyId);
    return this.driversService.create(driverDto, penalty);
  }

  @Get('/exists')
  async exists(
    @Query('number') number: string,
    @Query('nickname') nickName: string,
    @Query('season') season: string,
  ) {
    if (!!number) return this.driversService.numberExist(number, season);

    if (!!nickName) return this.driversService.nicknameExist(nickName, season);
  }
}
