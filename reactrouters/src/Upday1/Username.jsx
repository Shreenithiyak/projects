import { useState } from "react"

function App() {

  const [user, setUser] = useState({
    name: "John",
    age: 25
  })

  const updateName = () => {
    setUser({
      ...user,
      name: "Sudhan"
    })
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-20">

<div className="bg-pink-300 shadow-md rounded-lg p-20" > 
        <h1>Name : {user.name}</h1>
      <h1>Age : {user.age}</h1>

      <button className="bg-blue-500 text-white px-4 py-2"onClick={updateName} >
        Update Name
      </button>
</div>

    </div>
  )
}

export default App