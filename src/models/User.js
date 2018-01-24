import Sequelize from 'sequelize'
import sequelize from '../database'

const User = sequelize.define('user', {
  firstName: { type: Sequelize.STRING(15), allowNull: false },
  lastName: { type: Sequelize.STRING(15), allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true, isLowercase: true }
  },
  password: { type: Sequelize.STRING(60) },
  activated: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE }
})

User.prototype.isEmailUnique = () =>
  User.findOne({ where: { email: this.email, activated: true } }) ? false : true

export default User
