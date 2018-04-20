import { getString } from './connectors';

const resolvers = {
  Query: {
    testString(_, args) {
      return getString(args);
    }
  },
};

export default resolvers;