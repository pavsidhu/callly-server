const Mutation = `
  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String
    ): User

    createMeal(
      name: String!
      userId: ID!
      foodIds: [ID!]
    ): Meal

    createFood(
      name: String!
      protein: Float!
      carbohydates: Float!
      fat: Float!
      alcohol: Float
      sourceId: ID!
      manufacturerId: ID
    ): Food

    createManufacturer(
      name: String!
    ): Manufacturer

    createFoodSource(
      name: String!
      link: String!
    ): FoodSource
  }
`

export default Mutation
