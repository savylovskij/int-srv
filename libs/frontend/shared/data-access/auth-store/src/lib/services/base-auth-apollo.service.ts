import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  extractApolloResponse,
  ISignAuthPayload,
  ISignAuthResponse,
  IUsers,
  TApolloResponse,
} from '@int-srv/shared/utils/interfaces';
import * as ApolloQueries from '../graphql/auth.queries';
import { IAuthApollo } from '../interfaces/auth-apollo.interface';

@Injectable()
export class BaseAuthApollo implements IAuthApollo {
  signIn(
    payload: ISignAuthPayload,
    queryParam: Record<string, unknown> = {}
  ): TApolloResponse<ISignAuthResponse> {
    return this.apollo
      .query<{ user: IUsers }>({
        query: ApolloQueries.logInRequest.query,
        variables: payload,
      })
      .pipe(
        map((result: ApolloQueryResult<{ user: IUsers }>) =>
          extractApolloResponse(result, ApolloQueries.logInRequest.keys)
        ),
        catchError((error: ApolloError) => throwError(error))
      );
  }

  signOut(queryParam?: Record<string, unknown>): TApolloResponse<void> {
    return this.apollo
      .query<{ logout: boolean }>({ query: ApolloQueries.logOutRequest.query })
      .pipe(
        map(() => null),
        catchError((error: ApolloError) => throwError(error))
      );
  }

  constructor(private apollo: Apollo) {}
}
