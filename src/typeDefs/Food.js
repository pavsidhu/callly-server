import Node from './Node'
import Manufacturer from './Manufacturer'
import FoodSource from './FoodSource'

const Food = `
  type Food implements Node {
    id: ID!
    protein: Float!
    name: String!
    carbohydrates: Float!
    fats: Float!
    manufacturer: Manufacturer
    source: FoodSource!
    createdAt: String!
    updatedAt: String!
  }
`

export default Food
