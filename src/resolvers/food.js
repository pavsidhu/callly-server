import { Food } from '../models'

async function createFood(
  _,
  { name, protein, carbohydates, fat, alcohol, sourceId, manufacturerId }
) {
  try {
    return Food.build({
      name,
      protein,
      carbohydates,
      fat,
      alcohol,
      sourceId,
      manufacturerId
    }).save()
  } catch (error) {
    return error
  }
}

const resolvers = {
  Query: {
    food: async (_, { id }) => Food.findOne({ id })
  },
  Mutation: {
    createFood
  }
}

export default resolvers
