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
    provider: SocialProvider!,
    socialId: String!,
    token: String!,
    createdAt: String!
    updatedAt: String!
  }

  type Meal {
    id: ID!
    name: String
    foods: [Food]
    user: User
    createdAt: String!
    updatedAt: String!
  }

  type Manufacturer {
    id: ID!
    name: String!,
    Foods: [Food]
  }

  type FoodSource {
    id: ID!,
    name: String!,
    link: String!,
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
  }
`

export default typeDefs
