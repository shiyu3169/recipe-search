import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useLocalStorage } from '../hooks/useLocalStorage'
import favorite from '../pages/favorite'
import { Recipe } from '../providers/RecipeProvider'
import { parseIngredients } from '../utils'

type RecipeDetailsProps = {
  recipe: Recipe
}

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
  const [favorites, setFavorites] = useLocalStorage<{ [x: string]: Recipe }>(
    'favorites',
    {},
  )
  const [isFavorite, setIsFavorite] = useState(!!favorites[recipe.idMeal])

  const addFavorite = () => {
    setFavorites((favorites) => ({ ...favorites, [recipe.idMeal]: recipe }))
    setIsFavorite(true)
  }

  const removeFavorite = () => {
    setFavorites((favorites) => {
      const newFav: { [x: string]: Recipe } = { ...favorites }
      delete newFav[recipe.idMeal]
      return newFav
    })
    setIsFavorite(false)
  }

  return (
    <Container className='mt-5 '>
      <Row className='align-items-center' md='1' lg='2'>
        <Col>
          {isFavorite ? (
            <Button
              className='mb-2'
              variant='outline-danger'
              onClick={removeFavorite}
            >
              Remove from Favorite
            </Button>
          ) : (
            <Button
              onClick={addFavorite}
              className='mb-2'
              variant='outline-warning'
            >
              Add to Favorite
            </Button>
          )}
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
