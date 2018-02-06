import { Meal, MealFood, Food } from '../models'

async function createMeal(_, { name, foodIds }) {
  try {
    const meal = await Meal.build({ name }).save()

    await foodIds.map(id =>
      MealFood.build({ mealId: meal.id, foodId: id }).save()
    )

    const foods = foodIds.map(id => Food.findOne({ where: { id } }))

    return {
      ...meal,
      foods
    }
  } catch (error) {
    return error
  }
}

const resolvers = {
  Query: {
    meal: async (_, { id }) => Meal.findOne({ id })
  },
  Mutation: {
    createMeal
  }
}

export default resolvers
