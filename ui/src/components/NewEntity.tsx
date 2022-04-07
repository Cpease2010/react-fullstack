import { client } from '../client'

const NewEntity = () => {
  const handleSubmit = event => {
    client.post('/entity', { name: event.target.name.value, age: event.target.age.value }).then(response => {
      console.log(event.target)
      console.log(response)
    })
    return true
  }

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
