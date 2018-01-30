const typeDefs = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String
    facebook: FacebookAuth
    createdAt: String!
    updatedAt: String!
  }

  type FacebookAuth {
    id: ID!
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
