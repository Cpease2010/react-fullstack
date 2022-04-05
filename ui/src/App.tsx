import { FC, useEffect, useState } from 'react'

import { client } from './client'
import './styles/App.css'

const App: FC = () => {
  const [entities, setEntities] = useState([])

  useEffect(() => {
    const getEntities = async () => {
      try {
        const result = await client.get('/entities')
        setEntities(result.data)
      } catch (e) {
        setEntities([])
      }
    }
    getEntities()
  }, [])

  return (
    <div className='app'>
      <div className='app-banner'>
        {entities.map(({ id, name, age }, index) => (
          <ul key={index}>
            <li key={id}>{id}</li>
            <li key={name}>{name}</li>
            <li key={age}>{age}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}
export default App
