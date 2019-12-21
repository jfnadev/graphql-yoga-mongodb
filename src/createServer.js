const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

function createServer() {
  return new GraphQLServer({
    typeDefs: path.join(__dirname, 'schema.graphql'),
    resolvers: {
      Query,
      Mutation,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req }),
  });
}

module.exports = createServer;
