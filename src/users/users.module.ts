import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DriversService } from 'src/drivers/drivers.service';
import { Driver } from 'src/drivers/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Driver])],
  controllers: [UsersController],
  providers: [UsersService, DriversService],
})
export class UsersModule {}
