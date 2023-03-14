import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

export default function RecipeDetails() {
  const router = useRouter()
  const { recipeId } = router.query
  return <Container></Container>
}
