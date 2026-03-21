import { Link } from "react-router-dom"

const Navlink = () => {
  return (
    <div className="bg-black text-white p-4 flex gap-6">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Navlink