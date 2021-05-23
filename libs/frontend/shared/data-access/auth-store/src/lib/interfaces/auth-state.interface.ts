import { ISignAuthPayload } from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export interface IAuthState {
  signIn: ISignAuthPayload;
  signInRun: boolean;
  signInError: ApolloError;
  signOutRun: boolean;
  signOutError: ApolloError;
}
