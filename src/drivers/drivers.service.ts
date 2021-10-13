import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Penalty } from 'src/penalties/penalty.entity';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';
import { CreateDriverDto } from './dtos/create-driver.dto';

@Injectable()
export class DriversService {
  constructor(@InjectRepository(Driver) private repo: Repository<Driver>) {}

  async create({ nickName, number }: CreateDriverDto, penalty: Penalty) {
    while (number.length !== 3) {
      number = `0${number}`;
    }

    const driver = this.repo.create({
      nickName: nickName.toLowerCase(),
      number,
      penalty,
    });
    return this.repo.save(driver);
  }

  async findById(id: number) {
    return this.repo.findOne({ id });
  }

  async numberExist(number: string) {
    while (number.length !== 3) {
      number = `0${number}`;
    }
    const driver = await this.repo.findOne({ number });
    return { numberExists: !!driver };
  }

  async nicknameExist(nickname: string) {
    const driver = await this.repo.findOne({ nickName: nickname });
    return { nicknameExists: !!driver };
  }
}
