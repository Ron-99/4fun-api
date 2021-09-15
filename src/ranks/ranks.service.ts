import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRankDto } from './dtos/create-rank.dto';
import { Rank } from './rank.entity';

@Injectable()
export class RanksService {
  constructor(@InjectRepository(Rank) private repo: Repository<Rank>) {}

  async Create({ name }: CreateRankDto) {
    const rank = this.repo.create({ name });
    return this.repo.save(rank);
  }

  async findById(id: number) {
    return await this.repo.findOne({ id });
  }
}
