import { AdminGuard } from './../guards/admin.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dtos/create-team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Post()
  @UseGuards(AdminGuard)
  create(@Body() teamDto: CreateTeamDto) {
    return this.teamsService.create(teamDto);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }
}
