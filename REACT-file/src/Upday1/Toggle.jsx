import { useState } from "react"

function App() {

  const [status, setStatus] = useState(true)

  const toggleStatus = () => {
    setStatus(!status)
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-20">

      <div className="bg-pink-300 shadow-md rounded-lg p-20">
      <h1 className="text-2xl font-bold">
       Status : {status ? "Online" : "Offline"}
      </h1>
<div>
     <button className="bg-blue-500 text-white px-4 py-2"onClick={toggleStatus}>
      Toggle Status
      </button>
</div>

</div>

    </div>
  )
}

export default App