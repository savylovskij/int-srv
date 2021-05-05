import { Action, createReducer, on } from '@ngrx/store';
import { userInitialState } from './user-initial-state';
import * as UserActions from './user.actions';
import { IUserState } from '../interfaces/user-state.interface';

export const USER_FEATURE_KEY = 'user';

const userReducer = createReducer(
  userInitialState,
  on(
    UserActions.loadUserRun,
    (state): IUserState => ({
      ...state,
      userLoadRun: true,
      userLoadFailure: null,
    })
  ),
  on(
    UserActions.loadUserSuccess,
    (state, { payload }): IUserState => ({
      ...state,
      userLoadRun: false,
      user: payload,
    })
  ),
  on(
    UserActions.loadUserFailure,
    (state, { payload }): IUserState => ({
      ...state,
      userLoadRun: false,
      userLoadFailure: payload,
    })
  )
);

export function reducer(state: IUserState | undefined, action: Action) {
  return userReducer(state, action);
}
