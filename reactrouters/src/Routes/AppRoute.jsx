import {Route, Routes } from "react-router-dom"
import Createphase from "../pages/Createphase"
import Updatephase from "../pages/Updatephase"
import Introduction from "../pages/Introduction"
import Optimizationphase from "../pages/Optimizationphase"
import Dayy2 from "../Dayy2/Dayy2"
import Day3 from "../Day3/Day3"
import Day4_5 from "../Day4_5/Day4_5"
import Day7_8 from "../Day7_8/Day7_8"
import Upday1 from "../Upday1/Upday1"
import Upday2 from "../Upday2/Upday2"
import Upday3 from "../Upday3/Upday3"
import Upday4 from "../Upday4/Upday4"
import Recipe from "../fetch/Recipe"
import Core from "../fetch/Core"
import Provider from "../Usecontext/Provider"
import Toggle from "../Usecontext/Toggle"
import Admin from "../Usecontext/Admin"
import Profile from "../Usecontext/profile"
import Test from "../Usecontext/Test"
import Hoc from "../Usecontext/Hoc"
import WithButton from "../Hoc component/withButton"
import Task1 from "../Usememo/Task1"


const  AppRoute  = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Introduction/>}/>
      <Route path="/createphase" element={<Createphase/>}/>
      <Route path="/updatephase" element={<Updatephase/>}/>
      <Route path="/Optimizationphase" element={<Optimizationphase/>}/>
      <Route path="/Dayy2" element={<Dayy2/>}/>
      <Route path="/day3"  element={<Day3/>}/>
      <Route path="/day4_5" element={<Day4_5/>}/>
      <Route path="/day7_8" element={<Day7_8/>}/>
      <Route path="/upday1" element={<Upday1/>}/>
      <Route path="/upday2" element={<Upday2/>}/>
      <Route path="/upday3" element={<Upday3/>}/>
      <Route path="/upday4" element={<Upday4/>}/>
      <Route path="/recipe" element={<Recipe/>}/>
      <Route path="/Core" element={<Provider><Core/></Provider>}/>
      <Route path="/Toggle" element={<Provider><Toggle/></Provider>}/>
      <Route path="/admin" element={<Admin/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/Test" element={<Test/>} />
      <Route path="/Hoc" element={<Hoc/>} />
      <Route path="/Withbutton" element={<WithButton/>}/>
      <Route path="/Task1" element={<Task1/>}/>
    </Routes>
    
    </>
  )
}

export default  AppRoute 