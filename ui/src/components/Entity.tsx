import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { client } from '../client'

const Entity = props => {
  const name = props.entity.name
  const age = props.entity.age
  const { id } = useParams()
  const deleteEntity = id => {
    console.log(`This is the ID: ${id}`)
    client.delete(`/entity/${id}`).then(respone => {
      console.log({ respone: respone })
      window.location.reload()
    })
  }

  return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>ID: {id}</Card.Text>
        <Card.Text>AGE: {age}</Card.Text>
        <Button
          variant='primary'
          onClick={() => {
            deleteEntity(id)
          }}
          type='submit'
        >
          DELETE
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Entity
