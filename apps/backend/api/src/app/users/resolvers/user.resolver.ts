import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { CurrentUser } from '../decorators/user.decorator';
import { UserEntity } from '../entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('user')
  async whoAmI(@CurrentUser() user: UserEntity): Promise<UserEntity> {
    return this.userService.findOneById(user.id);
  }
}
