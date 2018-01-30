import Sequelize from 'sequelize'
import sequelize from '../database'
import Food from './Food'

const FoodSource = sequelize.define('food_source', {
  name: { type: Sequelize.STRING(30), allowNull: false },
  link: { type: Sequelize.STRING(30), allowNull: false }
})

FoodSource.hasMany(Food, {
  foreignKey: {
    name: 'sourceId'
  }
})

export default FoodSource
