import { Season } from 'src/seasons/season.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from 'src/drivers/driver.entity';
import { Track } from 'src/tracks/track.entity';
import { Repository } from 'typeorm';
import { Race } from './race.entity';
import { CreateRaceDto } from './dtos/create-race.dto';

@Injectable()
export class RacesService {
  constructor(@InjectRepository(Race) private repo: Repository<Race>) {}

  async create(
    { dateRace, points, bestTime }: CreateRaceDto,
    driver: Driver,
    track: Track,
    season: Season,
  ) {
    const race = this.repo.create({
      bestTime,
      dateRace,
      driver,
      points,
      season,
      track,
    });

    return await this.repo.save(race);
  }
}
