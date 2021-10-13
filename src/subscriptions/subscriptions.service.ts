import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from 'src/drivers/driver.entity';
import { Season } from 'src/seasons/season.entity';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription) private repo: Repository<Subscription>,
  ) {}

  async create(driver: Driver, season: Season) {
    const subscription = this.repo.create({ driver, season });
    return await this.repo.save(subscription);
  }

  async findByDriver(driverId: number) {
    return this.repo
      .createQueryBuilder()
      .select('*')
      .where('Subscription.driver_id = :driverId', { driverId })
      .getRawMany();
  }

  async findAll() {
    const subscription = this.repo
      .createQueryBuilder()
      .select(
        'users.first_name Nome, users.last_name Sobrenome, drivers.nickname Piloto, drivers.number Numero, users.mobilePhoneNumber Contato, users.email Email, ranks.name Categoria, categories.name Jogo',
      )
      .innerJoin('Subscription.driver', 'drivers')
      .innerJoin('Subscription.season', 'seasons')
      .innerJoin('drivers.users', 'users')
      .innerJoin('seasons.category', 'categories')
      .innerJoin('seasons.rank', 'ranks')
      .where('seasons.id != 2')
      .orderBy('Jogo')
      .getRawMany();
    return subscription;
  }
}
