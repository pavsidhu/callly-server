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
    Manufacturers: async () => await Manufacturer.findAll(),
    Manufacturer: async (_, { id }) => await Manufacturer.findOne({ id })
  },
  Mutation: {
    createManufacturer
  }
}

export default resolvers
