import Node from './Node'
import Food from './Food'
import User from './User'

const Meal = `
  enum MealName {
    BREAKFAST
    LUNCH
    DINNER
    SNACKS
  }

  type Meal implements Node {
    id: ID!
    name: MealName!
    foods: [Food]
    user: User!
    createdAt: String!
    updatedAt: String!
  }
`

export default Meal
