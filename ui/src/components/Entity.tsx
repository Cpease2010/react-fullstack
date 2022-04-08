import { Card, Button } from 'react-bootstrap'
import { client } from '../client'

const Entity = props => {
  const name = props.entity.name
  const age = props.entity.age
  const id = props.entity.id

  return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>ID: {id}</Card.Text>
        <Card.Text>AGE: {age}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Entity
