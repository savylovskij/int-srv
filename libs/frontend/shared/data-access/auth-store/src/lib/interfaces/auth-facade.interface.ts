import { ISignAuthPayload } from '@int-srv/shared/utils/interfaces';
import { Observable } from 'rxjs';
import { ApolloError } from '@apollo/client';

export abstract class IAuthFacade {
  signIn$: Observable<ISignAuthPayload>;
  signInRun$: Observable<boolean>;
  signInError$: Observable<ApolloError>;
  signOutRun$: Observable<boolean>;
  signOutError$: Observable<ApolloError>;

  abstract signIn(force?: boolean): void;

  abstract signInSet(payload: ISignAuthPayload): void;

  abstract signInClear(): void;

  abstract signOut(): void;
}
