import Node from './Node'

const SocialAuth = `
  enum SocialProvider {
    FACEBOOK
  }

  type SocialAuth implements Node {
    id: ID!
    provider: SocialProvider!
    socialId: String!
    token: String!
    createdAt: String!
    updatedAt: String!
  }
`

export default SocialAuth
