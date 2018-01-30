import Sequelize from 'sequelize'
import sequelize from '../database'
import Food from './Food'
import MealFood from './MealFood'

const Meal = sequelize.define('meal', {
  name: {
    type: Sequelize.ENUM('breakfast', 'lunch', 'dinner', 'snacks'),
    allowNull: false
  }
})

Meal.belongsToMany(Food, { through: MealFood })

export default Meal
