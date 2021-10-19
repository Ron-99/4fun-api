import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/guards/admin.guard';
import { CreateTrackDto } from './dtos/create-track.dto';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  @Post()
  @UseGuards(AdminGuard)
  create(@Body() trackDto: CreateTrackDto) {
    return this.tracksService.create(trackDto);
  }

  @Get()
  findAll() {
    return this.tracksService.findAll();
  }
}
