import { User } from '../models'
import bcrypt from 'bcrypt'

async function createUser(_, { firstName, lastName, email, password }) {
  try {
    password = await bcrypt.hash(password, 12)

    return User.build({
      firstName,
      lastName,
      email,
      password
    }).save()
  } catch (error) {
    return error
  }
}

const resolvers = {
  Query: {
    user: async (_, { id }) => User.findOne({ id })
  },
  Mutation: {
    createUser
  }
}

export default resolvers
