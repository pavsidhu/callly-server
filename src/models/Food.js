import Sequelize from 'sequelize'
import sequelize from '../database'

const Food = sequelize.define(
  'food',
  {
    name: { type: Sequelize.STRING(30), allowNull: false },
    protein: {
      type: Sequelize.FLOAT(4, 1),
      allowNull: false,
      defaultValue: 0.0
    },
    carbohydrate: {
      type: Sequelize.FLOAT(4, 1),
      allowNull: false,
      defaultValue: 0.0
    },
    fat: { type: Sequelize.FLOAT(4, 1), allowNull: false, defaultValue: 0.0 },
    alcohol: {
      type: Sequelize.FLOAT(4, 1),
      allowNull: false,
      defaultValue: 0.0
    }
  },
  {
    getterMethods: {
      getCalories: () =>
        this.protein * 4 +
        this.carbohydrate * 4 +
        this.fat * 9 +
        this.alcohol * 7
    }
  }
)

export default Food
