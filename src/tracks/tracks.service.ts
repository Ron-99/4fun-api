import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from './track.entity';

@Injectable()
export class TracksService {
  constructor(@InjectRepository(Track) private repo: Repository<Track>) {}

  async create({ name, flag }) {
    const track = this.repo.create({ name, flag });
    return await this.repo.save(track);
  }

  async findById(id: number) {
    return await this.repo.findOne({ id });
  }

  async findAll() {
    return await this.repo.find();
  }
}
