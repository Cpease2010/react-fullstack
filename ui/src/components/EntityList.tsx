import Entity from './Entity'

const EntityList = ({ entities }) => {
  return entities.map((entity, index) => <Entity key={index} id={entity.id} name={entity.name} age={entity.age} />)
}

export default EntityList
