import Image from 'next/image'
import { useRouter } from 'next/router'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Recipe } from '../../providers/RecipeProvider'
import { parseIngredients } from '../../utils'

export default function RecipeDetails() {
  const router = useRouter()
  const recipeId = (router.query.favoriteRecipeId ??
    router.query.recipeId) as string
  const [recipes] = useLocalStorage<{ [x: string]: Recipe }>('recipes', {})
  const recipe = recipes?.[recipeId]

  if (!recipe) return null

  return (
    <Container className='mt-5 '>
      <Row className='align-items-center' md='1' lg='2'>
        <Col>
          {/* TODO: add a loader for image */}
          <Image
            src={recipe.strMealThumb}
            alt='Picture of the author'
            width={500}
            height={500}
          />
        </Col>
        <Col>
          <h1>{recipe.strMeal}</h1>
          <p className='m-0'>Category: {recipe.strCategory}</p>
          <p>From: {recipe.strArea}</p>
          <h4>Ingredients:</h4>
          <ListGroup variant='flush'>
            {Array.from(parseIngredients(recipe)).map(([key, value]) => (
              <ListGroup.Item key={key}>
                {key}: {value}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className='mt-4'>
        <p>{recipe.strInstructions}</p>
      </Row>
    </Container>
  )
}
