import Sequelize from 'sequelize'
import sequelize from '../database'
import Food from './Food'

const Manufacturer = sequelize.define('manufacturer', {
  name: { type: Sequelize.STRING(30), allowNull: false }
})

Manufacturer.hasMany(Food)

export default Manufacturer
