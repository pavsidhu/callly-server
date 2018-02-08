const User = `
  type User implements Node {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String
    socialAuth: SocialAuth
    createdAt: String!
    updatedAt: String!
  }
`

export default User
