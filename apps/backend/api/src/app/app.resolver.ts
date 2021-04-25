import GraphQLJSON from 'graphql-type-json';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return value.getTime(); // Value from client
    },
    parseValue(value) {
      return new Date(value); // Value send to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
      }
      return null; // Invalid hard-coded value (not an integer)
    },
  }),
  JSON: GraphQLJSON,
};
