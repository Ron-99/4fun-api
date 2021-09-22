import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CreateUserDto } from './dtos/create-user.dto';
import { Driver } from 'src/drivers/driver.entity';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(user: CreateUserDto, driver: Driver) {
    // See if email is in use
    const users = await this.usersService.findByEmail(user.email);

    if (users.length) {
      throw new BadRequestException('Email já em uso');
    }

    // Hash the users password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');

    // Hash the salt and the password together
    const hash = (await scrypt(user.password, salt, 32)) as Buffer;

    // Join the hashed result and the salt together
    user.password = salt + '.' + hash.toString('hex');

    // Create a new user and save it
    const newUser = await this.usersService.create(user, driver);

    // return the user
    return newUser;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('Usuário não foi encontrado');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Senha incorreta');
    }
    return user;
  }
}
