import { IApolloRequest } from '@int-srv/shared/utils/interfaces';
import { gql } from 'apollo-angular';

export const logInRequest: IApolloRequest = {
  keys: ['login'],
  query: gql`
    query($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        id
        expiresIn
        accessToken
      }
    }
  `,
};
export const logOutRequest: IApolloRequest = {
  keys: ['logout'],
  query: gql`
    query {
      logout
    }
  `,
};
