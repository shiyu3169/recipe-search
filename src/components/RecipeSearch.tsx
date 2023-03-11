import { Form } from 'react-bootstrap'

export default function RecipeSearch() {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Search Recipe</Form.Label>
        <Form.Control type='email' placeholder='chick soup...' />
      </Form.Group>
    </Form>
  )
}
