import { useNavigate } from "react-router-dom"


const Optimizationphase = () => {

     const navigate = useNavigate()

  return (
    <>
     <div className="flex flex-col gap-6 items-center bg-mauve-700 h-screen p-10">
       <h1>Optimization phase</h1>
    <button onClick = {()=>navigate("/Task1")}className="px-4 py-2 text-white bg-green-500">Task1 </button>

     </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Optimizationphase