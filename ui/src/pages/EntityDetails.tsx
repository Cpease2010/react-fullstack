import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Entity from '../components/Entity'

const EntityDetails = props => {
  const { id } = useParams()
  const [entity, setEntity] = useState({})
  useEffect(() => {
    const gotEntity = props.getEntity(id)
    console.log(gotEntity)
    setEntity(props.entity ? props.entity : props.getEntity(id))
  }, [])

  return entity ? (
    <>
      <Entity key={entity['id']} entity={entity} />
    </>
  ) : (
    <>'No Details Found'</>
  )
}

export default EntityDetails
