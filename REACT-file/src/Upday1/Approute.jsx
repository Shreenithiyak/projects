import { Route, Routes } from 'react-router-dom'
import Toggle from './Toggle'
import Username from './Username'
import UserAge from './UserAge'
import Profile from './Profile'
import Counter from './Counter'
const Approute = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Counter/>}></Route>
    <Route path="/Toggle" element={<Toggle/>}></Route>
    <Route path="/Username" element={<Username/>}></Route>
    <Route path="/Userage" element={<UserAge/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
   </Routes>
   
   </>
  )
}

export default Approute