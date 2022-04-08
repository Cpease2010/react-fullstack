import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../client'
import Entity from '../components/Entity'

const EntityDetails = props => {
  const { id } = useParams()
  const [entity, setEntity] = useState({})
  useEffect(() => {
    if (id) {
      const getEntities = async () => {
        try {
          await client.get(`/entity/${id}`).then(result => {
            setEntity(result.data[0])
            console.log(entity)
          })
        } catch (e) {
          setEntity({})
        }
      }
      getEntities()
    }
  }, [])

  return entity['id'] ? <>{<Entity key={entity['id']} entity={entity} />}</> : <>'No Details Found'</>
}

export default EntityDetails
