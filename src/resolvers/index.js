import user from './user'
import meal from './meal'

const resolvers = {
  Query: {
    ...user.Query,
    ...user.Meal
  },
  Mutation: {
    ...user.Mutation,
    ...meal.Mutation
  }
}

export default resolvers
