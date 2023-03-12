import { Button, Card } from 'react-bootstrap'

type RecipeCardProps = {
  title: string
  description: string
  imageSrc: string
}

export default function RecipeCard({
  title,
  description,
  imageSrc,
}: RecipeCardProps) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant='top' src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* TODO: Discuss with BE to ask a short description */}
        <Card.Text>{description.slice(0, 150)}...</Card.Text>
      </Card.Body>
    </Card>
  )
}
