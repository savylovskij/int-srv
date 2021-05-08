import { IApolloRequest } from '@int-srv/shared/utils/interfaces';
import { gql } from '@apollo/client/core';

export const userRequest: IApolloRequest = {
  keys: ['user'],
  query: gql`
    query {
      user {
        id
        username
        password
        nickname
        email
        phone
        created
        udated
      }
    }
  `,
};
