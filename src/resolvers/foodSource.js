import { FoodSource } from '../models'

async function createFoodSource(_, { name, link }) {
  try {
    return FoodSource.build({
      name,
      link
    }).save()
  } catch (error) {
    return error
  }
}

const resolvers = {
  Query: {
    FoodSources: async () => await FoodSource.findAll(),
    FoodSource: async (_, { id }) => await FoodSource.findOne({ id })
  },
  Mutation: {
    createFoodSource
  }
}

export default resolvers
