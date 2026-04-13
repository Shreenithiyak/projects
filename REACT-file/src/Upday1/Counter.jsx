import { useState } from "react"


const Counter = () => {
      
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }
  return (
    <>
    
    
        <div className="flex flex-col items-center gap-4 mt-20">

<div className="bg-pink-300 shadow-md rounded-lg p-20 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold"> Count : {count} </h1>

      <button  className="bg-green-500 text-white px-4 py-2"onClick={increase}>
        Increase
      </button>

      <button className="bg-red-500 text-white px-4 py-2"onClick={decrease}>
        Decrease
      </button>

      <button className="bg-gray-500 text-white px-4 py-2"onClick={reset}>
        Reset
      </button>
</div>

    </div>
    
    
    
</>
  )
}

export default Counter