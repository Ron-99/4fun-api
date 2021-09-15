import { Body, Controller, Get, Post } from '@nestjs/common';
import { DriversService } from 'src/drivers/drivers.service';
import { SeasonsService } from 'src/seasons/seasons.service';
import { createSubscriptionDto } from './dtos/create-subscription.dto';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(
    private subscriptionsService: SubscriptionsService,
    private seasonsService: SeasonsService,
    private driversService: DriversService,
  ) {}

  @Post()
  async create(@Body() body: createSubscriptionDto) {
    const driver = await this.driversService.findById(body.driverId);
    const season = await this.seasonsService.findById(body.seasonId);
    return this.subscriptionsService.create(driver, season);
  }

  @Get()
  async findAll() {
    return this.subscriptionsService.findAll();
  }
}
