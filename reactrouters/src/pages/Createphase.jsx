
import { useNavigate } from "react-router-dom"

const CreatePhase = () => {

  const navigate = useNavigate()

  return (
    <div className="p-10 flex flex-col gap-6 items-center">

      <h1 className="text-2xl font-bold">Create Phase</h1>

      <button onClick={() => navigate("/Dayy2")}  className="bg-blue-500 text-white px-4 py-2" >
        Task 1
      </button>

      <button onClick={() => navigate("/day3")} className="bg-green-500 text-white px-4 py-2" >
        Task 2
      </button>

      
      <button onClick={() => navigate("/day4_5")} className="bg-red-500 text-white px-4 py-2" >
        Task 3
      </button>

     
      <button onClick={() => navigate("/day7_8")} className="bg-purple-500 text-white px-4 py-2" >
        Task 4
      </button>

    </div>
  )
}

export default CreatePhase
