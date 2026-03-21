import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  const handleRegister = () => {
    navigate("/dashboard")
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-40">

      <h1 className="text-2xl font-bold">Register</h1>

      <input className="border p-2" placeholder="Name"/>
      <input className="border p-2" placeholder="Email"/>
      <input className="border p-2" placeholder="Password"/>

      <button onClick={handleRegister}className="bg-green-500 text-white px-4 py-2">
        Register
      </button>

    </div>
  )
}


export default Register