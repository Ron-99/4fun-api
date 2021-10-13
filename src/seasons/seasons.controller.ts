import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { RanksService } from 'src/ranks/ranks.service';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { CreateSeasonDto } from './dtos/create-season.dto';
import { SeasonsService } from './seasons.service';

@Controller('seasons')
export class SeasonsController {
  constructor(
    private seasonsService: SeasonsService,
    private ranksService: RanksService,
    private categoriesService: CategoriesService,
  ) {}

  @Post()
  async create(@Body() seasonDto: CreateSeasonDto) {
    const rank = await this.ranksService.findById(seasonDto.ranksId);
    const category = await this.categoriesService.findById(
      seasonDto.categoriesId,
    );
    return this.seasonsService.create(seasonDto, rank, category);
  }

  @Get()
  async findAll(@CurrentUser() user: User) {
    return this.seasonsService.findAll(user);
  }
}
