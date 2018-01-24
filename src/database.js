import Sequelize from 'sequelize'
import config from './config'

const sequelize = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    port: config.database.port,
    dialect: config.database.dialect
  }
)

sequelize.sync()

export default sequelize
