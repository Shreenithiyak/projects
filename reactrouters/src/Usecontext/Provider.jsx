import { useState } from "react"
import Create from "./Create"


const Provider = ({children}) => {
  const [change,setChange]= useState(false)
  const [lang,setLang]= useState("EN")
  const [role,setRole]=useState("user")
  
  const checkchange =()=>{
    setChange(!change)

  }
//   const textchange=()=>{
//   setLang(prev => (prev === "EN" ? "TA" : "EN"));
//   }
  
  
// const changeRole=()=>{
//   setRole(role)
// }



    return (
    <>
    
    <Create.Provider value={{change,checkchange,lang,setLang,role,setRole}}>
        {children}
    </Create.Provider>

    </>
  )
}

export default Provider

























