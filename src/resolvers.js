import User from './models/User'

const resolvers = {
  Query: {
    Users: async () => await User.findAll(),
    User: async (_, { id }) => await User.findOne({ where: { id } })
  },
  Mutation: {
    createUser: async (_, { firstName, lastName, email, password }) =>
      User.build({
        firstName,
        lastName,
        email,
        password
      })
        .save()
        .then(user => user)
        .catch(e => e)
  }
}

export default resolvers
