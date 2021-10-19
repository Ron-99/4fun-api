import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dtos/create-team.dto';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  constructor(@InjectRepository(Team) private repo: Repository<Team>) {}

  async create({ name }: CreateTeamDto) {
    const team = this.repo.create({ name });
    return await this.repo.save(team);
  }

  async findById(id: number) {
    return await this.repo.findOne({ id });
  }

  async findAll() {
    return await this.repo.find();
  }
}
