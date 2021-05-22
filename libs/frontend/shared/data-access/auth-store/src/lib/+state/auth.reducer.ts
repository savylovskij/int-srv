import { Action, createReducer, on } from '@ngrx/store';
import { authInitialState } from './auth-initial-state';
import { IAuthState } from '../interfaces/auth-state.interface';
import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

const authReducer = createReducer(
  authInitialState,
  on(AuthActions.sigInSet, (state, { payload }) => ({
    ...state,
    signIn: payload,
  })),
  on(AuthActions.sigInClear, (state) => ({
    ...state,
    signIn: null,
  })),
  on(AuthActions.sigInRun, (state) => ({
    ...state,
    signInRun: true,
    signInError: null,
  })),
  on(AuthActions.sigInFailure, (state, { payload }) => ({
    ...state,
    signInError: payload,
    signInRun: false,
  })),
  on(AuthActions.sigInSuccess, (state) => ({
    ...state,
    signInError: null,
    signInRun: false,
  })),
  on(AuthActions.sigOutRun, (state) => ({
    ...state,
    signOutError: null,
    signOutRun: true,
  })),
  on(AuthActions.sigOutSuccess, (state) => ({
    ...state,
    signOutError: null,
    signOutRun: false,
  })),
  on(AuthActions.sigOutFailure, (state, { payload }) => ({
    ...state,
    signOutError: payload,
    signOutRun: false,
  }))
);

export function reducer(state: IAuthState | undefined, action: Action) {
  return authReducer(state, action);
}
