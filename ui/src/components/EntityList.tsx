import React from 'react'

const EntityList = ({ entities }) => {
  return entities.map(({ id, name, age }, index) => (
    <ul key={index}>
      <li key={id}>{id}</li>
      <li key={name}>{name}</li>
      <li key={age}>{age}</li>
    </ul>
  ))
}

export default EntityList
