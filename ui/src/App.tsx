import { FC, useEffect, useState } from 'react'

import { client } from './client'
import EntityList from './components/EntityList'
import NewEntity from './components/NewEntity'
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
        <EntityList entities={entities} />
        <NewEntity />
      </div>
    </div>
  )
}
export default App
