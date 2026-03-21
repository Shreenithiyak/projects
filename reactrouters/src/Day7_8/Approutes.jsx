import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Dashboardlayout from "./Layout"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import Register from "./Register"


const Approutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      <Route element={<Dashboardlayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Route>

    </Routes>
    </>
  )
}

export default Approutes






