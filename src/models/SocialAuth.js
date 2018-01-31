import Sequelize from 'sequelize'
import sequelize from '../database'

const SocialAuth = sequelize.define('social_auth', {
  provider: { type: Sequelize.ENUM('facebook'), allowNull: false },
  socialId: { type: Sequelize.INTEGER, allowNull: false },
  token: { type: Sequelize.STRING(64), allowNull: false }
})

export default SocialAuth
