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

  async emailExist(email: string) {
    const userExists = await this.repo.findOne({ email });

    return { userExists: !!userExists };
  }

  findByEmail(email: string) {
    return this.repo.find({ email });
  }

  findById(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({ id });
  }

  findUserAndDriverById(id: number) {
    if (!id) {
      return null;
    }

    return this.repo
      .createQueryBuilder()
      .select(
        'first_name, last_name, email, role, mobile_phone_number, driver_id',
      )
      .where('id = :id', { id })
      .getRawOne();
  }
}
