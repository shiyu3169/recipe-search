import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function RecipeDetails() {
  const router = useRouter()
  const { recipeId } = router.query
  const [recipes] = useLocalStorage('recipes', {})
  console.log(recipes)
  return <Container></Container>
}
