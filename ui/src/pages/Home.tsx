import EntityList from '../components/EntityList'
import NewEntity from '../components/NewEntity'
import PaginateEntities from '../components/PaginateEntities'

const Home = ({ entities }) => {
  return (
    <>
      <PaginateEntities entities={entities} />
      <div>
        <NewEntity />
        {/* <EntityList entities={entities} /> */}
      </div>
    </>
  )
}

export default Home
