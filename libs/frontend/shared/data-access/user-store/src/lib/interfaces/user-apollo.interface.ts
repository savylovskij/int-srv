import { IUsers, TApolloResponse } from '@int-srv/shared/utils/interfaces';

export abstract class IUserApollo {
  abstract loadUser(
    queryParams?: Record<string, unknown>
  ): TApolloResponse<IUsers>;
}
