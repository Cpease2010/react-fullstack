import Entity from '../components/Entity'

const EntityDetails = props => {
  return props.entity ? (
    <>
      <Entity key={props.entity['id']} entity={props.entity} />
    </>
  ) : (
    <>'No Details Found'</>
  )
}

export default EntityDetails
