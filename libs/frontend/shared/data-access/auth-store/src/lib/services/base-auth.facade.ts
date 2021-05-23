import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAuthFacade } from '../interfaces/auth-facade.interface';
import { ISignAuthPayload } from '@int-srv/shared/utils/interfaces';
import { IAuthStoreFeatureKey } from '../interfaces/auth-store-feature-key.interface';
import * as AuthActions from '../+state/auth.actions';
import * as AuthSelectors from '../+state/auth.selectors';

@Injectable()
export class BaseAuthFacade implements IAuthFacade {
  signIn$ = this.store.pipe(select(AuthSelectors.getSignIn));
  signInError$ = this.store.pipe(select(AuthSelectors.getSignInFailure));
  signInRun$ = this.store.pipe(select(AuthSelectors.getSignInRun));
  signOutError$ = this.store.pipe(select(AuthSelectors.getSignOutFailure));
  signOutRun$ = this.store.pipe(select(AuthSelectors.getSignOutRun));

  signIn(force?: boolean): void {
    this.store.dispatch(AuthActions.sigIn({ payload: { force } }));
  }

  signInClear(): void {
    this.store.dispatch(AuthActions.sigInClear());
  }

  signInSet(payload: ISignAuthPayload): void {
    this.store.dispatch(AuthActions.sigInSet({ payload }));
  }

  signOut(force?: boolean): void {
    this.store.dispatch(AuthActions.sigOut({ payload: { force } }));
  }

  constructor(private store: Store<IAuthStoreFeatureKey>) {}
}
