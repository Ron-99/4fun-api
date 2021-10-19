import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DriversService } from 'src/drivers/drivers.service';
import { AdminGuard } from 'src/guards/admin.guard';
import { SeasonsService } from 'src/seasons/seasons.service';
import { TracksService } from 'src/tracks/tracks.service';
import { CreateRaceDto } from './dtos/create-race.dto';
import { RacesService } from './races.service';

@Controller('races')
export class RacesController {
  constructor(
    private racesService: RacesService,
    private driversService: DriversService,
    private seasonsService: SeasonsService,
    private tracksService: TracksService,
  ) {}

  @Post()
  @UseGuards(AdminGuard)
  async create(@Body() raceDto: CreateRaceDto) {
    const driver = await this.driversService.findById(raceDto.driver);
    const season = await this.seasonsService.findById(raceDto.season);
    const track = await this.tracksService.findById(raceDto.track);

    return this.racesService.create(raceDto, driver, track, season);
  }
}
