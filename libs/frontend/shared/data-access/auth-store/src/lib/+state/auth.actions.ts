import { createAction } from '@ngrx/store';
import { payload, payloadForce } from '@int-srv/shared/utils/store';
import {
  ISignAuthPayload,
  ISignAuthResponse,
} from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export const sigIn = createAction('[Auth] SigIn', payloadForce());
export const sigInSet = createAction(
  '[Auth] SigIn data set',
  payload<ISignAuthPayload>()
);
export const sigInClear = createAction('[Auth] SigIn data clear');
export const sigInCancel = createAction('[Auth] SigIn cancel');
export const sigInRun = createAction('[Auth] SigIn run');
export const sigInSuccess = createAction(
  '[Auth] SigIn success',
  payload<ISignAuthResponse>()
);
export const sigInFailure = createAction(
  '[Auth] SigIn error',
  payload<ApolloError>()
);

export const sigOut = createAction('[Auth] SigOut', payloadForce());
export const sigOutCancel = createAction('[Auth] SigOut cancel');
export const sigOutRun = createAction('[Auth] SigOut run');
export const sigOutSuccess = createAction('[Auth] SigOut success');
export const sigOutFailure = createAction(
  '[Auth] SigOut error',
  payload<ApolloError>()
);
