import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/category.entity';
import { Rank } from 'src/ranks/rank.entity';
import { RanksService } from 'src/ranks/ranks.service';
import { Subscription } from 'src/subscriptions/subscription.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { Season } from './season.entity';
import { SeasonsController } from './seasons.controller';
import { SeasonsService } from './seasons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Season, Rank, Category, Subscription])],
  controllers: [SeasonsController],
  providers: [
    SeasonsService,
    RanksService,
    CategoriesService,
    SubscriptionsService,
  ],
})
export class SeasonsModule {}
