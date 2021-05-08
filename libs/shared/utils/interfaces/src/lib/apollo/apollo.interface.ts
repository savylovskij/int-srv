import { DocumentNode } from 'graphql';
import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

/**
 * Apollo request
 */
export interface IApolloRequest {
  keys?: string[];
  query: DocumentNode;
}

export type TApolloResponse<
  T = any,
  R extends ApolloError = ApolloError
> = Observable<T | R>;

export function ExtractApolloResponse<T = any>(
  result: ApolloQueryResult<any>,
  entitiesKey?: string[]
) {
  const key = !entitiesKey ? Object.keys(entitiesKey) : entitiesKey;

  return key.length === 1 ? result.data[key[0]] : result.data;
}
