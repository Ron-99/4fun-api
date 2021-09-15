import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Driver } from 'src/drivers/driver.entity';
const PG_UNIQUE_CONSTRAINT_VIOLATION = '23505';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(
    {
      firstName,
      lastName,
      email,
      password,
      role,
      mobilePhoneNumber,
    }: CreateUserDto,
    driver: Driver,
  ) {
    try {
      const user = this.repo.create({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password,
        role,
        mobilePhoneNumber,
        driver,
      });

      return await this.repo.save(user);
    } catch (err) {
      if (err && err.code === PG_UNIQUE_CONSTRAINT_VIOLATION) {
        throw new BadRequestException('Este e-mail já foi cadastrado');
      }
    }
  }

  async emailExist(email: string, season: string) {
    const user = await this.repo
      .createQueryBuilder()
      .select('User.email')
      .innerJoin('User.driver', 'drivers')
      .innerJoin('drivers.subscriptions', 'subscriptions')
      .where('subscriptions.seasonId = :season', { season })
      .andWhere('User.email = :email', { email })
      .getRawMany();

    const userExists = await this.repo.findOne({ email });

    return { seasonSub: user.length !== 0, userExists: !!userExists };
  }
}
