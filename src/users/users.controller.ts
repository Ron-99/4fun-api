import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Query,
  Session,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { DriversService } from 'src/drivers/drivers.service';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { CreateUserDto } from './dtos/create-user.dto';
import { Roles } from './roles.enum';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private driversService: DriversService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async signup(@Body() body: CreateUserDto, @Session() session: any) {
    const driver = await this.driversService.findById(body.driverId);
    const user = await this.authService.signup(body, driver);
    session.userId = user.id;
    return user;
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post('/admin')
  @UseGuards(AdminGuard)
  async createAdmin(@Body() body: CreateUserDto, @Session() session: any) {
    const driver = await this.driversService.findById(body.driverId);
    body.role = Roles.Admin;
    const user = await this.authService.signup(body, driver);
    session.userId = user.id;
    return user;
  }

  @Get('/whoami')
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }

  @Get('/email')
  async emailExists(@Query('email') email: string) {
    return this.usersService.emailExist(email.toLowerCase());
  }
}
