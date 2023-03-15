import { Recipe } from '../providers/RecipeProvider'

export function parseIngredients(recipe: Recipe): Map<string, string> {
  const result = new Map<string, string>()

  let index = 1
  while (true) {
    const ingredientNameKey = `strIngredient${index}`
    const ingredientQuantityKey = `strMeasure1${index}`
    const ingredientNameValue = recipe[ingredientNameKey]
    if (!ingredientNameValue) break
    result.set(ingredientNameValue, recipe[ingredientQuantityKey] || 'some')
    index += 1
  }
  return result
}
