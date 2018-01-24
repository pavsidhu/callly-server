const typeDefs = `
  type User {
    id: ID!,
    firstName: String!,
    lastName: String!,
  }

  type Query {
    users: [User]
  }
`

export default typeDefs
