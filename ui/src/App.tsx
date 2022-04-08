import { FC, useEffect, useState } from 'react'
import { client } from './client'
import EntityDetails from './pages/EntityDetails'
import Home from './pages/Home'
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App: FC = () => {
  const [entities, setEntities] = useState([])

  useEffect(() => {
    const getEntities = async () => {
      try {
        await client.get('/entities').then(result => setEntities(result.data))
      } catch (e) {
        setEntities([])
      }
    }
    getEntities()
  }, [])

  return (
    <>
      <Router>
        <div className='nav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/entity/:id' element={<EntityDetails entities={entities} />} />
            <Route path='/' element={<Home entities={entities} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App
