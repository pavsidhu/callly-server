const typeDefs = `
  type Query {
    Users: [User]
    User(id: ID): User
    Foods: [Food]
    Food: Food
    Meals: [Meal]
    Meal: Meal
  }

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
    id: String
    token: String
  }

  type Food {
    id: ID!
    name: String!
    protein: Float!
    carbohydrates: Float!
    fats: Float!
    manufacturer: String
    source: String!
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
`

export default typeDefs
