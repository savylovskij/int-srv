import { createAction } from '@ngrx/store';
import { payload, payloadForce } from '@int-srv/shared/utils/store';
import { IUsers } from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export const loadUser = createAction('[Users] Load User', payloadForce());
export const loadUserCancel = createAction('[Users] Load User Cancel');
export const loadUserRun = createAction('[Users] Load User Run');
export const loadUserSuccess = createAction(
  '[Users] Load User Success',
  payload<IUsers>()
);
export const loadUserFailure = createAction(
  '[Users] Load User Failure',
  payload<ApolloError>()
);
