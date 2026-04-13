import {Component }from "react"
import Button from "./Button"
class NavBar extends Component{

 render(){
    return(
    <>
      <nav className="flex items-center justify-between bg-blue-500 p-4">
        <a href="" className="text-white hover:text-blue-700">Home</a>
        <a href="" className="text-white hover:text-blue-700">about</a>
        <a href="" className="text-white hover:text-blue-700">contact</a>
        <a href="" className="text-white hover:text-blue-700">login</a>
        <Button/>
      </nav>
    
    </>
    )
 }
}

export default NavBar