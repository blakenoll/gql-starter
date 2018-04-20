import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

// define your schema here 
const typeDefs = `
type Query {
  testString(text: String): String
}`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
