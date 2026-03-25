import { useState } from "react"
import Create from "./Create"


const Provider = ({children}) => {
  const [change,setChange]= useState(false)
  const [lang,setLang]= useState("EN")
  
  const checkchange =()=>{
    setChange(!change)

  }
  const textchange=()=>{
  setLang(prev => (prev === "EN" ? "TA" : "EN"));
  }
  
    return (
    <>
    
    <Create.Provider value={{change,checkchange}}>
        {children}
    </Create.Provider>
    
    <Create.Provider value={{lang,textchange}}>
        {children}
    </Create.Provider>
    </>
  )
}

export default Provider

























