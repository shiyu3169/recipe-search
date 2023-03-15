import { useRouter } from 'next/router'
import RecipeDetails from '../../components/RecipeDetails'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Recipe } from '../../providers/RecipeProvider'

export default function RecipeById() {
  const router = useRouter()
  const recipeId = router.query.recipeId as string
  const [recipes] = useLocalStorage<{ [x: string]: Recipe }>('recipes', {})

  const recipe = recipes?.[recipeId]

  // TODO: make a 404 page
  if (!recipe) return null

  return <RecipeDetails recipe={recipe} />
}
