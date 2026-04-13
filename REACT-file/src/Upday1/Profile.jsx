import { useState } from "react"

function App() {

  const [employee, setEmployee] = useState({
    name: "Priya",
    role: "Developer",
    experience: 2
  })

  const promote = () => {
    setEmployee({
      ...employee,
      role: "Senior Developer",
      experience: employee.experience + 1
    })
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-20">

<div className="bg-pink-300 shadow-md rounded-lg p-20 ">
      <h1>Name : {employee.name}</h1>
      <h1>Role : {employee.role}</h1>
      <h1>Experience : {employee.experience}</h1>

<div>
      <button className="bg-green-500 text-white px-4 py-2 "onClick={promote}>
      Promote
      </button>
</div>

</div>
    </div>
  )
}

export default App