import EntityList from '../components/EntityList'
import NewEntity from '../components/NewEntity'

const Home = ({ entities }) => {
  return (
    <>
      <div>
        <NewEntity />
        <EntityList entities={entities} />
      </div>
    </>
  )
}

export default Home
