import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  async create({ name, urlImage }: CreateCategoryDto) {
    const category = this.repo.create({ name, urlImage });
    return await this.repo.save(category);
  }

  async findById(id: number) {
    return await this.repo.findOne({ id });
  }

  async findAll() {
    return await this.repo.find();
  }
}
