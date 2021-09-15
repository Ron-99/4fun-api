import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rank } from './rank.entity';
import { RanksController } from './ranks.controller';
import { RanksService } from './ranks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rank])],
  controllers: [RanksController],
  providers: [RanksService],
})
export class RanksModule {}
