import Sequelize from 'sequelize'
import sequelize from '../database'
import Meal from './Meal'
import SocialAuth from './SocialAuth'

const User = sequelize.define('user', {
  firstName: { type: Sequelize.STRING(15), allowNull: false },
  lastName: { type: Sequelize.STRING(15), allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true, isLowercase: true }
  },
  password: { type: Sequelize.STRING(60) },
  activated: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
})

User.prototype.isEmailUnique = () =>
  User.findOne({ where: { email: this.email, activated: true } }) ? false : true

User.hasMany(Meal, {
  foreignKey: {
    allowNull: false
  }
})

User.hasMany(SocialAuth, {
  foreignKey: {
    allowNull: false
  }
})

export default User
