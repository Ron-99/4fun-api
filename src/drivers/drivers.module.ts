import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenaltiesService } from 'src/penalties/penalties.service';
import { Penalty } from 'src/penalties/penalty.entity';
import { Driver } from './driver.entity';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Driver, Penalty])],
  controllers: [DriversController],
  providers: [DriversService, PenaltiesService],
})
export class DriversModule {}
