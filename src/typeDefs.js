const typeDefs = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String
    socialAuth: SocialAuth
    createdAt: String!
    updatedAt: String!
  }

  enum SocialProvider {
    FACEBOOK
  }

  type SocialAuth {
    id: ID!
    provider: SocialProvider!
    socialId: String!
    token: String!
    createdAt: String!
    updatedAt: String!
  }

  enum MealName {
    BREAKFAST
    LUNCH
    DINNER
    SNACKS
  }

  type Meal {
    id: ID!
    name: MealName!
    foods: [Food]
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  type Manufacturer {
    id: ID!
    name: String!
    Foods: [Food]
  }

  type FoodSource {
    id: ID!
    name: String!
    link: String!
    Foods: [Food]
  }

  type Food {
    id: ID!
    name: String!
    protein: Float!
    carbohydrates: Float!
    fats: Float!
    manufacturer: Manufacturer!
    source: FoodSource!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    Users: [User]
    User(id: ID): User
    Meals: [Meal]
    Meal(id: ID): Meal
    Foods: [Food]
    Food(id: ID): Food
    Manufacturers: [Manufacturer]
    Manufacturer(id: ID): Manufacturer
    FoodSources: [FoodSource]
    FoodSource(id: ID): FoodSource
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
