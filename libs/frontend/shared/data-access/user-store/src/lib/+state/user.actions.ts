import { createAction } from '@ngrx/store';
import { payload, payloadForce } from '@int-srv/shared/utils/store';
import { IUsers } from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export const loadUser = createAction('[IUsers] Load User', payloadForce());
export const loadUserCancel = createAction('[IUsers] Load User Cancel');
export const loadUserRun = createAction('[IUsers] Load User Run');
export const loadUserSuccess = createAction(
  '[IUsers] Load User Success',
  payload<IUsers>()
);
export const loadUserFailure = createAction(
  '[IUsers] Load User Failure',
  payload<ApolloError>()
);
