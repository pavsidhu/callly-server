const typeDefs = `
  type Node {
    id: ID!
    createdAt: String!
    updatedAt: String!
  }

  type User implements Node {
    firstName: String!
    lastName: String!
    email: String!
    password: String
    socialAuth: SocialAuth
  }

  enum SocialProvider {
    FACEBOOK
  }

  type SocialAuth implements Node {
    provider: SocialProvider!
    socialId: String!
    token: String!
  }

  enum MealName {
    BREAKFAST
    LUNCH
    DINNER
    SNACKS
  }

  type Meal implements Node {
    name: MealName!
    foods: [Food]
    user: User!
  }

  type Manufacturer implements Node {
    name: String!
    Foods: [Food]
  }

  type FoodSource implements Node {
    id: ID!
    name: String!
    link: String!
    Foods: [Food]
  }

  type Food implements Node {
    name: String!
    protein: Float!
    carbohydrates: Float!
    fats: Float!
    manufacturer: Manufacturer
    source: FoodSource!
  }

  type Query {
    user(id: ID): User
    meal(id: ID): Meal
    food(id: ID): Food
    manufacturer(id: ID): Manufacturer
    foodSource(id: ID): FoodSource
  }

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

export default typeDefs
