import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { IUserApollo } from '../interfaces/user-apollo.interface';
import {
  ExtractApolloResponse,
  IUsers,
  TApolloResponse,
} from '@int-srv/shared/utils/interfaces';
import * as UserQuery from '../graphql/user.quiries';
import { catchError, map } from 'rxjs/operators';
import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { throwError } from 'rxjs';

@Injectable()
export class UserApollo implements IUserApollo {
  loadUser(queryParams: Record<string, unknown> = {}): TApolloResponse<IUsers> {
    return this.apollo
      .query<{ user: IUsers }>({
        query: UserQuery.userRequest.query,
      })
      .pipe(
        map((result: ApolloQueryResult<{ user: IUsers }>) =>
          ExtractApolloResponse(result, UserQuery.userRequest.keys)
        ),
        catchError((error: ApolloError) => throwError(error))
      );
  }

  constructor(private apollo: Apollo) {}
}
