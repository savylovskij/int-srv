import { Injectable } from '@angular/core';
import { IUserFacade } from '../interfaces/user-facade.interface';
import { Observable } from 'rxjs';
import { IUsers } from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';
import { select, Store } from '@ngrx/store';
import { IUserStoreFeatureKey } from '../interfaces/user-store-feature-key.interface';
import * as UserSelectors from './user.selectors';
import * as UserActions from './user.actions';

@Injectable()
export class UserFacade implements IUserFacade {
  user$: Observable<IUsers> = this.store.pipe(select(UserSelectors.getUser));

  userLoadFailure$: Observable<ApolloError> = this.store.pipe(
    select(UserSelectors.getUserLoadFailure)
  );

  userLoadRun$: Observable<boolean> = this.store.pipe(
    select(UserSelectors.getUserLoadRun)
  );

  loadUser(force?: boolean): void {
    this.store.dispatch(UserActions.loadUser({ payload: { force: true } }));
  }

  constructor(private store: Store<IUserStoreFeatureKey>) {}
}
