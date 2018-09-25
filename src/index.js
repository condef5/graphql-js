const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')


const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => {
      return context.db.links({}, info)
    },
  },
  Mutation: {
    post: (root, args, context, info) => {
      return context.db.createLink({
        data: {
          url: args.url,
          description: args.description,
        },
      }, info)
    },
  },
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
