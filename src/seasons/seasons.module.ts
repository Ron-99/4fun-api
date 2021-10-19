import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/category.entity';
import { Race } from 'src/races/race.entity';
import { RacesService } from 'src/races/races.service';
import { Rank } from 'src/ranks/rank.entity';
import { RanksService } from 'src/ranks/ranks.service';
import { Subscription } from 'src/subscriptions/subscription.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { Season } from './season.entity';
import { SeasonsController } from './seasons.controller';
import { SeasonsService } from './seasons.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Season, Rank, Category, Subscription, Race]),
  ],
  controllers: [SeasonsController],
  providers: [
    SeasonsService,
    RanksService,
    CategoriesService,
    SubscriptionsService,
    RacesService,
  ],
})
export class SeasonsModule {}
