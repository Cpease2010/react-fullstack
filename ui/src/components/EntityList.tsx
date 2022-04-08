import { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { client } from '../client'
import Entity from './Entity'

const EntityList = ({ entities }) => {
  const [showDetails, setShowDetails] = useState({})

  const toggleDetails = id => {
    console.log(id)
    setShowDetails({ ...showDetails, [id]: !showDetails[id] })
  }

  const deleteEntity = id => {
    console.log(`This is the ID: ${id}`)
    client.delete(`/entity/${id}`).then(respone => {
      console.log({ respone: respone })
      window.location.reload()
    })
  }

  return (
    <ListGroup>
      {entities.map((entity, index) => {
        return (
          <ListGroup.Item key={index}>
            {showDetails[index] ? (
              <>
                <Button
                  variant='primary'
                  onClick={() => {
                    deleteEntity(entity.id)
                  }}
                  type='submit'
                >
                  Delete {entity.name}
                </Button>
                <Button onClick={() => toggleDetails(index)} value={entity.name}>
                  Collapse {entity.name}
                </Button>
                <Entity key={index} entity={entity} />
              </>
            ) : (
              <Button onClick={() => toggleDetails(index)} value={entity.name}>
                Expland: {entity.name}
              </Button>
            )}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default EntityList
