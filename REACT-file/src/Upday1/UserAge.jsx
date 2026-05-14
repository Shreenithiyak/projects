import { useState } from "react"

function App() {

  const [user, setUser] = useState({
    name: "Ravi",
    age: 22,
    city: "Chennai"
  })

  const increaseAge = () => {
    setUser({
      ...user,
      age: user.age + 1
    })
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-20">

    <div  className="bg-pink-300 shadow-md rounded-lg p-20">
        <h1>Name : {user.name}</h1>
      <h1>Age : {user.age}</h1>
      <h1>City : {user.city}</h1>

      <button  className="bg-blue-500 text-white px-4 py-2"onClick={increaseAge} >
        Increase Age
      </button>
    </div>

    </div>
  )
}

export default App