import {
  ISignAuthPayload,
  ISignAuthResponse,
  TApolloResponse,
} from '@int-srv/shared/utils/interfaces';

export abstract class IAuthApollo {
  abstract signIn(
    payload: ISignAuthPayload,
    queryParam?: Record<string, unknown>
  ): TApolloResponse<ISignAuthResponse>;

  abstract signOut(queryParam?: Record<string, unknown>): TApolloResponse<void>;
}
