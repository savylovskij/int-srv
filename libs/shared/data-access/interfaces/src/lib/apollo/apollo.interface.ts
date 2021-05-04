import { DocumentNode } from 'graphql';
import { ApolloError } from '@apollo/client';
import { Observable } from 'rxjs';

/**
 * Apollo request
 */
export interface IApolloRequest {
  key?: string;
  query: DocumentNode;
}

export type TApolloResponse<
  T = any,
  R extends ApolloError = ApolloError
> = Observable<T | R>;
