import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Recipe } from '../providers/RecipeProvider'

type RecipeCardProps = {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { strMealThumb, strMeal, strInstructions } = recipe
  const [, setRecipes] = useLocalStorage('recipes', {})
  const router = useRouter()
  const onClick = () => {
    setRecipes((recipes) => ({ ...recipes, [recipe.idMeal]: recipe }))
    router.push(`/recipe/${recipe.idMeal}`)
  }
  return (
    <Card
      className='hover-zoom'
      style={{ width: '100%', cursor: 'pointer' }}
      onClick={onClick}
    >
      {/* TODO: update this to use Next.js Image */}
      <div className='hover-zoom'>
        <Card.Img variant='top' src={strMealThumb} draggable={false} />
      </div>
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>{strInstructions.slice(0, 150)}...</Card.Text>
      </Card.Body>
    </Card>
  )
}
