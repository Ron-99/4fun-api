import { Roles } from '../roles.enum';
import { CreateUserDto } from './create-user.dto';

export class CreateAdminDto extends CreateUserDto {
  role: Roles = Roles.Admin;
}
