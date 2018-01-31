import { User, Meal, Food, Manufacturer, FoodSource } from './models'

const createUser = async (_, { firstName, lastName, email, password }) =>
  User.build({
    firstName,
    lastName,
    email,
    password
  })
    .save()
    .catch(error => error)
const resolvers = {
  Query: {
    Users: async () => await User.findAll(),
    User: async (_, { id }) => await User.findOne({ id }),
    Meals: async () => await Meal.findAll(),
    Meal: async (_, { id }) => await Meal.findOne({ id }),
    Foods: async () => await Food.findAll(),
    Food: async (_, { id }) => await Food.findOne({ id }),
    Manufacturers: async () => await Manufacturers.findAll(),
    Manufacturer: async (_, { id }) => await Manufacturer.findOne({ id }),
    FoodSource: async () => await FoodSource.findAll(),
    FoodSource: async (_, { id }) => await FoodSource.findOne({ id })
  },
  Mutation: {
    createUser,
  }
}

export default resolvers
