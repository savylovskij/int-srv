import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY } from './auth.reducer';
import { IAuthState } from '../interfaces/auth-state.interface';

export const getAuthState = createFeatureSelector<IAuthState>(AUTH_FEATURE_KEY);

export const getSignIn = createSelector(
  getAuthState,
  (state: IAuthState) => state.signIn
);

export const getSignInRun = createSelector(
  getAuthState,
  (state: IAuthState) => state.signInRun
);

export const getSignInFailure = createSelector(
  getAuthState,
  (state: IAuthState) => state.signInError
);

export const getSignOutRun = createSelector(
  getAuthState,
  (state: IAuthState) => state.signOutRun
);

export const getSignOutFailure = createSelector(
  getAuthState,
  (state: IAuthState) => state.signOutError
);
