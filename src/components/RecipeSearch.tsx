import { Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { useState, ChangeEvent, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebouce'
import { useRecipeContext } from '../providers/RecipeProvider'
import { useSearchRecipes } from '../hooks/useSearchRecipes'
import RecipeCard from './RecipeCard'
import RecipesList from './RecipesList'

export default function RecipeSearch() {
  const {
    state: { recipes },
  } = useRecipeContext()
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedValue = useDebounce(searchTerm, 400)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  // watch debounced value to fetch data
  const { isLoading, isError, error } = useSearchRecipes(debouncedValue)

  return (
    <>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Search Recipe</Form.Label>
          <Form.Control
            type='email'
            placeholder='chicken soup...'
            onChange={onChange}
          />
        </Form.Group>
      </Form>
      {isLoading ?? 'Loading...'}
      {isError ?? error}
      {debouncedValue ? <RecipesList recipes={recipes} /> : null}
    </>
  )
}
