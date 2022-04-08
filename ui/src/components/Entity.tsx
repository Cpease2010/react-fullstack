import { Card } from 'react-bootstrap'

const Entity = props => {
  const { id, name, age } = props.entity

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
