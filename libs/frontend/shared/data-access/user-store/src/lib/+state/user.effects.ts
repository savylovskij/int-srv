import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DataPersistence } from '@nrwl/angular';
import { IUserStoreFeatureKey } from '../interfaces/user-store-feature-key.interface';
import { IUserApollo } from '../interfaces/user-apollo.interface';
import { createEffect } from '@ngrx/effects';
import {
  IActionEffectPayload,
  IActionForcePayload,
} from '@int-srv/shared/utils/interfaces';
import * as UserActions from './user.actions';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { USER_FEATURE_KEY } from '@int-srv/frontend/shared/data-access/user-store';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.dataPersistence.fetch<IActionEffectPayload<IActionForcePayload>>(
      UserActions.loadUser,
      {
        run(
          action: IActionEffectPayload<IActionForcePayload>,
          store?: IUserStoreFeatureKey
        ): Observable<Action> | Action | void {
          return isPlatformBrowser(this.platformId) &&
            (!store[USER_FEATURE_KEY].userLoadRun || action.payload.force)
            ? UserActions.loadUserRun
            : UserActions.loadUserCancel;
        },
        onError(
          action: IActionEffectPayload<IActionForcePayload>,
          error: any
        ): any {
          console.log('error', error);
        },
      }
    )
  );

  constructor(
    private dataPersistence: DataPersistence<IUserStoreFeatureKey>,
    private userApollo: IUserApollo,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  /*  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return UserActions.loadUserSuccess({ user: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        },
      })
    )
  );*/
}
