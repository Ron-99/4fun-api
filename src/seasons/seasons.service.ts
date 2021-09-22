import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { Rank } from 'src/ranks/rank.entity';
import { Repository } from 'typeorm';
import { CreateSeasonDto } from './dtos/create-season.dto';
import { Season } from './season.entity';

@Injectable()
export class SeasonsService {
  constructor(@InjectRepository(Season) private repo: Repository<Season>) {}

  async create(
    { number, initialDate, finalDate, finalDateSub }: CreateSeasonDto,
    rank: Rank,
    category: Category,
  ) {
    const season = await this.repo.create({
      number,
      initialDate,
      finalDate,
      category,
      rank,
      finalDateSub,
    });

    return this.repo.save(season);
  }

  async findById(id: number) {
    return await this.repo.findOne({ id });
  }

  async findAll() {
    return await this.repo
      .createQueryBuilder()
      .select(
        'Season.id, Season.number, ranks.name rank, Season.initial_date initialDate, Season.final_date_subscription date, categories.name category, categories.url_image urlImage',
      )
      .innerJoin('Season.rank', 'ranks')
      .innerJoin('Season.category', 'categories')
      .getRawMany();
  }
}
