import Node from './Node'
import Food from './Food'

const FoodSource = `
  type FoodSource implements Node {
    id: ID!
    name: String!
    link: String!
    Foods: [Food]
    createdAt: String!
    updatedAt: String!
  }
`

export default FoodSource
