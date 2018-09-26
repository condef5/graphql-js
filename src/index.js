const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
const Feed = require('./resolvers/Feed')

const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  Feed
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => {
    return {
      ...req,
      db: prisma,
    }
  },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
