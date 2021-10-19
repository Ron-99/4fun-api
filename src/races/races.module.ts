import { Season } from 'src/seasons/season.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from 'src/drivers/driver.entity';
import { DriversService } from 'src/drivers/drivers.service';
import { SeasonsService } from 'src/seasons/seasons.service';
import { Track } from 'src/tracks/track.entity';
import { TracksService } from 'src/tracks/tracks.service';
import { Race } from './race.entity';
import { RacesController } from './races.controller';
import { RacesService } from './races.service';

@Module({
  imports: [TypeOrmModule.forFeature([Race, Driver, Track, Season])],
  controllers: [RacesController],
  providers: [RacesService, DriversService, TracksService, SeasonsService],
})
export class RacesModule {}
