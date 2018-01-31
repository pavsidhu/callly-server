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
    Foods: async () => await Food.findAll(),
    Food: async (_, { id }) => await Food.findOne({ id })
  },
  Mutation: {
    createFood
  }
}

export default resolvers
