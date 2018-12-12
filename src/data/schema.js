import { gql } from 'apollo-server';

// define your schema here 
const typeDefs = gql`
type Query {
  testString(text: String): String
}
`;


export default typeDefs;
