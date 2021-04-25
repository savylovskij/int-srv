import GraphQLJSON from 'graphql-type-json';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: Date) {
      return value.toISOString(); // Value send to the client
    },
    parseValue(value: string) {
      return new Date(value); // Value from client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value); // Convert hard-coded AST string to integer and then to Date
      }
      return null;
    },
  }),
  JSON: GraphQLJSON,
};
