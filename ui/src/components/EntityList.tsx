import { Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EntityList = ({ entities }) => {
  return (
    <ListGroup>
      {entities.map((entity, index) => {
        const linkToDetails = `/entity/${entity.id}`
        return (
          <ListGroup.Item key={index}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={linkToDetails}>
              <Button>{entity.name}</Button>
            </Link>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default EntityList
