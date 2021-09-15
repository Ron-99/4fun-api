import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DriversService } from 'src/drivers/drivers.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private driversService: DriversService,
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    const driver = await this.driversService.findById(body.driverId);
    return this.usersService.create(body, driver);
  }

  @Get('/email')
  async emailExists(
    @Query('email') email: string,
    @Query('season') season: string,
  ) {
    return this.usersService.emailExist(email.toLowerCase(), season);
  }
}
