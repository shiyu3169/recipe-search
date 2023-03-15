import { Col, Container, Row } from 'react-bootstrap'
import { Recipe } from '../providers/RecipeProvider'
import RecipeCard from './RecipeCard'

type RecipesListProps = {
  recipes: Recipe[]
}

export default function RecipesList({ recipes }: RecipesListProps) {
  return recipes?.length > 0 ? (
    <Container>
      <Row className='justify-content-md-center'>
        {recipes.map((recipe) => (
          <Col key={recipe.idMeal} className='mb-3' sm='12' md='6' lg='4'>
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <div>No Result is found</div>
  )
}
