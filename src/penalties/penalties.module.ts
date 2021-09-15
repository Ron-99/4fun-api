import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenaltiesController } from './penalties.controller';
import { PenaltiesService } from './penalties.service';
import { Penalty } from './penalty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Penalty])],
  controllers: [PenaltiesController],
  providers: [PenaltiesService],
})
export class PenaltiesModule {}
