import { Observable } from 'rxjs';
import { IUsers } from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

/**
 * User facade
 */
export abstract class IUserFacade {
  user$: Observable<IUsers>;
  userLoadRun$: Observable<boolean>;
  userLoadFailure$: Observable<ApolloError>;

  abstract loadUser(force?: boolean): void;
}
