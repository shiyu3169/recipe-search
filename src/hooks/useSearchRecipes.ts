import { useQuery } from '@tanstack/react-query'
import { RecipeActionType, useRecipeContext } from '../providers/RecipeProvider'

const searchRecipes = async (searchTerm: string) => {
  const res = await fetch(
    ` https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
  )
  return res.json()
}

export const useSearchRecipes = (searchTerm: string) => {
  const { dispatch } = useRecipeContext()
  return useQuery({
    queryKey: ['recipes', searchTerm],
    queryFn: () => searchRecipes(searchTerm),
    enabled: searchTerm.length > 0,
    onSuccess(data) {
      dispatch({
        type: RecipeActionType.SET_RECIPES,
        payload: {
          recipes: data.meals,
        },
      })
    },
  })
}
