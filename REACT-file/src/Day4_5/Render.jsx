// Variable Rendering
const App2 = () => {
  const name="sri"
  const age=22
  const city="chennai"

  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      <p>{city}</p>
    </>
  )
}

// Array list
const Arr = () => {
  const fruits=["apple","mango","orange","banana"]

  return (
    <ul>
      {fruits.map((f,i)=>(
        <li key={i}>{f}</li>
      ))}
    </ul>
  )
}

// Users list
const Person = () => {
  const users=[
    {id:1,name:"sri",age:22},
    {id:2,name:"sri",age:22},
    {id:3,name:"sri",age:22}
  ]

  return (
    <ul>
      {users.map((u)=>(
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}

// Skills
const Users = () => {
  const user={
    name:"John",
    skills:["HTML","CSS","JavaScript"]
  }

  return (
    <>
      <p>{user.name}</p>
      <ul>
        {user.skills.map((s,i)=>(
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  )
}

// Login condition
const Login = () => {
  const isLoggedIn=true
  return <p>{isLoggedIn ? "welcome user" : "pls login"}</p>
}

// Age condition
const Age = () => {
  const age=23
  return <p>{age>=18 ? "adult" : "minor"}</p>
}

// Admin
const Admin = () => {
  const isAdmin=true
  return <p>{isAdmin ? "admin dashboard" : "pls login"}</p>
}

export { App2, Arr, Person, Users, Login, Age, Admin }