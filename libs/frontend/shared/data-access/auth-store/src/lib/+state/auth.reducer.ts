import { Action, createReducer, on } from '@ngrx/store';
import { authInitialState } from './auth-initial-state';
import { IAuthState } from '../interfaces/auth-state.interface';
import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

const authReducer = createReducer(
  authInitialState,
  on(AuthActions.signInSet, (state, { payload }) => ({
    ...state,
    signIn: payload,
  })),
  on(AuthActions.signInClear, (state) => ({
    ...state,
    signIn: null,
  })),
  on(AuthActions.signInRun, (state) => ({
    ...state,
    signInRun: true,
    signInError: null,
  })),
  on(AuthActions.signInFailure, (state, { payload }) => ({
    ...state,
    signInError: payload,
    signInRun: false,
  })),
  on(AuthActions.signInSuccess, (state) => ({
    ...state,
    signInError: null,
    signInRun: false,
  })),
  on(AuthActions.signOutRun, (state) => ({
    ...state,
    signOutError: null,
    signOutRun: true,
  })),
  on(AuthActions.signOutSuccess, (state) => ({
    ...state,
    signOutError: null,
    signOutRun: false,
  })),
  on(AuthActions.signOutFailure, (state, { payload }) => ({
    ...state,
    signOutError: payload,
    signOutRun: false,
  }))
);

export function reducer(state: IAuthState | undefined, action: Action) {
  return authReducer(state, action);
}
