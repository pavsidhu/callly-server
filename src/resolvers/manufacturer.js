import { Manufacturer } from '../models'

async function createManufacturer(_, { name }) {
  try {
    return Manufacturer.build({
      name
    }).save()
  } catch (error) {
    return error
  }
}

const resolvers = {
  Query: {
    manufacturer: async (_, { id }) => Manufacturer.findOne({ id })
  },
  Mutation: {
    createManufacturer
  }
}

export default resolvers
