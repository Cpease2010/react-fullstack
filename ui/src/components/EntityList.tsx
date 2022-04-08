import { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { client } from '../client'
import Entity from './Entity'
import '../styles/App.css'

const EntityList = ({ entities }) => {
  const [showDetails, setShowDetails] = useState({})

  const toggleDetails = id => {
    console.log(id)
    setShowDetails({ ...showDetails, [id]: !showDetails[id] })
  }

  const deleteEntity = id => {
    console.log(`This is the ID: ${id}`)
    client.delete(`/entity/${id}`).then(response => {
      alert(response.data)
      window.location.reload()
    })
  }

  return (
    <ListGroup className='entityList'>
      {entities.map((entity, index) => {
        return (
          <ListGroup.Item key={index}>
            {showDetails[index] ? (
              <>
                <Button
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
