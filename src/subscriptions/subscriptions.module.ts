import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from 'src/drivers/driver.entity';
import { DriversService } from 'src/drivers/drivers.service';
import { Season } from 'src/seasons/season.entity';
import { SeasonsService } from 'src/seasons/seasons.service';
import { Subscription } from './subscription.entity';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription, Season, Driver])],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService, SeasonsService, DriversService],
})
export class SubscriptionsModule {}
