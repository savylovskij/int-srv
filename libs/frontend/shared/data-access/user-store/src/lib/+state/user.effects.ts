import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import { IUserStoreFeatureKey } from '../interfaces/user-store-feature-key.interface';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUserApollo } from '../interfaces/user-apollo.interface';
import { createEffect } from '@ngrx/effects';

import {
  IActionEffectPayload,
  IActionForcePayload,
  IUsers,
} from '@int-srv/shared/utils/interfaces';
import { AbstractEffects } from '@int-srv/shared/utils/store';

import { USER_FEATURE_KEY } from './user.reducer';
import * as UserActions from './user.actions';
import { IUserState } from '../interfaces/user-state.interface';

@Injectable()
export class UserEffects extends AbstractEffects<IUserState> {
  loadUser$ = createEffect(() =>
    this.dataPersistence.fetch<IActionEffectPayload<IActionForcePayload>>(
      UserActions.loadUser,
      {
        run: (
          action: IActionEffectPayload<IActionForcePayload>,
          store?: IUserStoreFeatureKey
        ): Observable<Action> | Action | void =>
          isPlatformBrowser(this.platformId) &&
          (!this.getState(store).userLoadRun || action.payload.force)
            ? UserActions.loadUserRun()
            : UserActions.loadUserCancel(),
        onError: (
          action: IActionEffectPayload<IActionForcePayload>,
          error: any
        ): any => this.errorHandler(action, error),
      }
    )
  );

  loadUserRun$ = createEffect(() =>
    this.dataPersistence.fetch(UserActions.loadUserRun, {
      run: (): Observable<Action> | Action | void =>
        this.userApollo.loadUser().pipe(
          map<IUsers, Action>((payload) =>
            UserActions.loadUserSuccess({ payload })
          )
        ),
      onError: (action, error): any =>
        this.errorHandler(action, error, UserActions.loadUserFailure),
    })
  );

  constructor(
    private dataPersistence: DataPersistence<IUserStoreFeatureKey>,
    private userApollo: IUserApollo,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    super(USER_FEATURE_KEY);
  }
}
