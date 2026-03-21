import Logo from "./Logo"


function NavBar() {
  return (
    <div>
        
        <div className="flex bg-blue-500 p-7">
            <Logo/>
            <div className="flex bg-white p-3 ml-30 rounded " >
            <input type="text" placeholder="search for" />

            </div>
            <div>
           
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default NavBar