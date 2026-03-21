import { Link } from 'react-router-dom'
import AppRoute from './Routes/AppRoute'

const App = () => {
  return (
   <>
    <nav className="flex  bg-blue-500 p-4">
    <div className="flex  ">
      <h1 className="flex text-3xl ">ASSIGNMENTS</h1>
    </div>
    <div className="flex ml-300 gap-9 text-2xl hover:text-green-500">
     <Link to="/" className="text-white">Introduction</Link>
      <Link to="/createphase" className="text-white">Create Phase</Link>
      <Link to="/updatephase" className="text-white">Update Phase</Link>
</div>
    </nav>
      <AppRoute/>
   </>
  )
}
export default App





