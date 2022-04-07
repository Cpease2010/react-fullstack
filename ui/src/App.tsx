import { FC, useEffect, useState } from 'react'
import { ListGroupItem } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/esm/ListGroup'
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
      <div className='entityList'>
        <EntityList entities={entities} />
      </div>
      <div>
        <NewEntity />
      </div>
    </div>
  )
}
export default App
