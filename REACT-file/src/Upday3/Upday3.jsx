import { useState } from "react"
const Upday3 = () => {

  const[username,setUserName] = useState({name:"",email:"",age:""})

  const handleLogin = (e) => {
    setUserName((prev)=>({...prev,[e.target.name]:e.target.value}))

  }
  const handlesubmit = (e) => {
    e.preventDefault()
  console.log(username)
  } 

  return (
<form onSubmit={handlesubmit}>
  <button className=" text-black text-2xl ml-250 px-4 py-2" onClick={()=>window.location.href="/updatephase"}>Back</button>

      <div className="flex flex-col items-center gap-4 mt-40">

     <div className="bg-blue-300 text-white p-25 rouded-md flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold">Login</h1>

      <input className="border p-2" placeholder="Enter name"name="name" value={username.name}onChange={handleLogin}/>

      <input className="border p-2" placeholder="Enter Email" name="email"value={username.email}onChange={handleLogin}/>
  
      <input className="border p-2" placeholder="Enter Age"name="age" value={username.age}onChange={handleLogin}/>
      
      <button  className="bg-blue-500 text-white px-4 py-2"type="submit">Login</button>


</div>
  </div>
</form>
  )
}

export default Upday3