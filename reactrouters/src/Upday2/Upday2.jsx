// Create a counter with Increase and Decrease buttons using prev state update.

import { useState } from "react"

function Upday2() {

  const [count, setCount] = useState(0)
  const[toggle,setToggle] = useState()
  const[skill,setSkill] = useState(["html","js"])
  const[user,setUser] = useState({name:"Ravi",age:22})

  const increase = () => {
    setCount(prev=> prev+1 )
     setCount(prev=> prev+1 )
  }
  const decrease = () => {
    setCount(prev=> prev-1 )
  }

const toggleStatus = () => {
    setToggle(prev =>!prev)
  }
const add = () => {
  setSkill(prev=>[...prev,"react"])
}

const increaseAge =()=>{
  setUser(prev=>({...prev,age:prev.age+1}))
}

  return (
    <>
    <button className=" text-black text-2xl ml-250 px-4 py-2" onClick={()=>window.location.href="/updatephase"}>Back</button>
    <div className="flex flex-col items-center gap-4 mt-20">
      <div className="bg-pink-300 shadow-md rounded-lg p-20">
        <h1 className="text-2xl font-bold"> Count : {count} </h1>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-green-500 text-white px-4 py-2" onClick={increase}> Increase </button>
          <button className="bg-red-500 text-white px-4 py-2" onClick={decrease}> Decrease</button>
        </div>
      </div>
  
     <h1>Status:{toggle?"correct counter":"wrong logic couter"}</h1>
     <button  className="bg-blue-500 text-white px-4 py-2"onClick={toggleStatus}>Toggle</button>

      <h1 className="p-4 text-2xl text-bold">{skill}</h1>
      <button  className="bg-blue-500 text-white px-4 py-2" onClick={add}>check</button>


     <h1>Name : {user.name}</h1><h1>Age : {user.age}</h1>
     <button  className="bg-blue-500 text-white px-4 py-2"onClick={increaseAge} >Increase Age</button>


    </div>

   




    </>
  )
}

export default Upday2