import { Form } from 'react-bootstrap'
import { useState, ChangeEvent, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebouce'
import { RecipeActionType, useRecipeContext } from '../providers/RecipeProvider'
import { useSearchRecipes } from '../hooks/useSearchRecipes'

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
      {recipes?.length > 0 ? (
        recipes.map((recipe) => <div key={recipe.idMeal}>{recipe.strMeal}</div>)
      ) : (
        <div>Empty</div>
      )}
    </>
  )
}
