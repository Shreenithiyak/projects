import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
const Login = () => {

  const navigate = useNavigate()
  const[name,setName] = useState("")

  const handleLogin = () => {
    navigate("/dashboard")
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-40">

<div className="bg-blue-300 text-white p-25 rouded-md flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold">Login</h1>

      <input className="border p-2" placeholder="Enter name" value={name}onChange={(e)=>setName(e.target.value)}/>
       <p className="text-gray-700">{name}</p>

      <button  onClick={handleLogin}className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>

      <Link className="text-blue-600" to="/register">
        Create Account
      </Link>
</div>

    </div>
  )
}

export default Login