
import { Outlet } from 'react-router-dom'
import Navlink from './Navlink'

const Dashboardlayout = () => {
  return (
   <>
   
   <Navlink/>
   <Outlet/>
   </>
  )
}

export default Dashboardlayout