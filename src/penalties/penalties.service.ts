import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePenaltyDto } from './dtos/create-penalty.dto';
import { Penalty } from './penalty.entity';

@Injectable()
export class PenaltiesService {
  constructor(@InjectRepository(Penalty) private repo: Repository<Penalty>) {}

  async create({ color, description, level }: CreatePenaltyDto) {
    const penalty = this.repo.create({ color, description, level });

    return this.repo.save(penalty);
  }

  async findById(id: number) {
    return await this.repo.findOne({ id });
  }
}
