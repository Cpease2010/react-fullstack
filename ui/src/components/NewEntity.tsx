import React from 'react'
import { client } from '../client'
const handleSubmit = event => {
  console.log({ name: event.target.name.value, age: event.target.age.value })

  client
    .post('/entity', { name: event.target.name.value, age: event.target.age.value })
    .then(response => console.log(event.target))
}
const NewEntity = () => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type='text' name='name'></input>
      </label>
      <label>
        Age: <input type='text' name='age'></input>
      </label>
      <input type='submit' value='Submit'></input>
    </form>
  )
}

export default NewEntity
