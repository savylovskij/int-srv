import { createAction } from '@ngrx/store';
import { payload, payloadForce } from '@int-srv/shared/utils/store';
import {
  ISignAuthPayload,
  ISignAuthResponse,
} from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export const signIn = createAction('[Auth] SignIn', payloadForce());
export const signInSet = createAction(
  '[Auth] SignIn data set',
  payload<ISignAuthPayload>()
);
export const signInClear = createAction('[Auth] SignIn data clear');
export const signInCancel = createAction('[Auth] SignIn cancel');
export const signInRun = createAction('[Auth] SignIn run');
export const signInSuccess = createAction(
  '[Auth] SignIn success',
  payload<ISignAuthResponse>()
);
export const signInFailure = createAction(
  '[Auth] SignIn error',
  payload<ApolloError>()
);

export const signOut = createAction('[Auth] SignOut', payloadForce());
export const signOutCancel = createAction('[Auth] SignOut cancel');
export const signOutRun = createAction('[Auth] SignOut run');
export const signOutSuccess = createAction('[Auth] SignOut success');
export const signOutFailure = createAction(
  '[Auth] SignOut error',
  payload<ApolloError>()
);
