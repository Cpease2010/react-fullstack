import EntityList from '../components/EntityList'
import NewEntity from '../components/NewEntity'

const Home = ({ entities }) => {
  return (
    <>
      <div className='app'>
        <EntityList entities={entities} />
        <NewEntity />
      </div>
    </>
  )
}

export default Home
