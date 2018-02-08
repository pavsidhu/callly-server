const Query = `
  type Query {
    user(id: ID): User
    meal(id: ID): Meal
    food(id: ID): Food
    manufacturer(id: ID): Manufacturer
    foodSource(id: ID): FoodSource
  }
`

export default Query
