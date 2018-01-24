import User from './models/User'

const resolvers = {
  Query: {
    Users: async () => await User.findAll(),
    User: async (_, { id }) => await User.findOne({ where: { id } })
  }
}

export default resolvers
