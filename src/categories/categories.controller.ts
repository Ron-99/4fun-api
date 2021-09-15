import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesService.create(categoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
}
