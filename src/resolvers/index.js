import user from './user'
import meal from './meal'
import food from './food'
import manufacturer from './manufacturer'
import foodSource from './foodSource'

const resolvers = {
  Query: {
    ...user.Query,
    ...meal.Query,
    ...manufacturer.Query,
    ...foodSource.Query
  },
  Mutation: {
    ...user.Mutation,
    ...meal.Mutation,
    ...food.Mutation,
    ...manufacturer.Mutation,
    ...foodSource.Mutation
  }
}

export default resolvers
