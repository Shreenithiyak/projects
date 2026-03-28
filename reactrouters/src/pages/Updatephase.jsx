import { useNavigate } from "react-router-dom"

const UpdatePhase = () => {

  const navigate = useNavigate()

  return (
    <div className="p-10 flex flex-col gap-6 items-center  bg-mauve-500 h-screen">
      <h1 className="text-2xl font-bold">Update phase</h1>

      <button onClick={() => navigate("/Upday1")}  className="bg-blue-500 text-white px-4 py-2" >
        Task 1
      </button>

      <button onClick={() => navigate("/Upday2")} className="bg-green-500 text-white px-4 py-2" >
        Task 2
      </button>

      <button onClick={() => navigate("/Upday3")} className="bg-red-500 text-white px-4 py-2" >
        Task 3
      </button>

      <button onClick={() => navigate("/Upday4")} className="bg-purple-500 text-white px-4 py-2" >
        Task 4
      </button>

      <button onClick={() => navigate("/recipe")} className="bg-pink-400 text-white px-4 py-2" >
        Task 5
      </button>

      <button onClick={() => navigate("/Core")} className="bg-neutral-400 text-white px-4 py-2" >
        Task 6
      </button>
      <button onClick={() => navigate("/Toggle")} className="bg-gray-600 text-white px-4 py-2" >
        Task 7
      </button>
      <button onClick={() => navigate("/Toggle")} className="bg-gray-600 text-white px-4 py-2" >
        Task 8
      </button>
      <button onClick={() => navigate("/Test")} className="bg-gray-600 text-white px-4 py-2" >
        Task 9
      </button>
    </div>
  )
}

export default UpdatePhase
