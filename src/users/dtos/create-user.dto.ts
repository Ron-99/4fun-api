import { IsEmail, IsInt, IsMobilePhone, IsString } from 'class-validator';
import { Roles } from '../roles.enum';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  role: Roles = Roles.User;

  @IsMobilePhone('pt-BR')
  mobilePhoneNumber: string;

  @IsInt()
  driverId: number;
}
