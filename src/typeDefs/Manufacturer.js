import Node from './Node'
import Food from './Food'

const Manufacturer = `
  type Manufacturer implements Node {
    id: ID!
    name: String!
    Foods: [Food]
    createdAt: String!
    updatedAt: String!
  }
`

export default Manufacturer
