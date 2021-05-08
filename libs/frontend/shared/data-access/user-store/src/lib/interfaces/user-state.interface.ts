import { IUsers } from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export interface IUserState {
  user: IUsers;
  userLoadRun: boolean;
  userLoadFailure: ApolloError;
}
