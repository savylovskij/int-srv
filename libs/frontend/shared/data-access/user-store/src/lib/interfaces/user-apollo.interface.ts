import { TApolloResponse } from '@int-srv/shared/data-access/interfaces';

export abstract class IUserApollo {
  abstract loadUser(queryParams: Record<string, unknown>): TApolloResponse;
}
