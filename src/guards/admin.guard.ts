import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Roles } from 'src/users/roles.enum';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.currentUser) {
      return false;
    }
    return request.currentUser.role === Roles.Admin;
  }
}
