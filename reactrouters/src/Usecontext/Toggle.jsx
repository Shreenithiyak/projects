import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Create from "./Create";

const Toggle = () => {
  const { lang, setLang, role, setRole } = useContext(Create);
  const navigate = useNavigate();

  const handleRole = () => {
    const newRole = role === "admin" ? "user" : "admin";
    setRole(newRole);


    if (newRole === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  };

  const inputRef=useRef()
  const timerRef=useRef(null)
  

 const handlevalue=()=>{
      if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  timerRef.current=setTimeout(() => {
  console.log("rendering");
    alert(inputRef.current.value +  "user stopped typing....") 
 }, 2000);
}




  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      
      <h1 className="text-2xl font-bold">
        {lang === "EN" ? "Hello" : "Vanakkam"}
      </h1>

      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        onClick={() => setLang(lang === "EN" ? "TA" : "EN")}>
        Switch Language
      </button>

      <button  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        onClick={handleRole}>
        Switch Role
      </button>

      <input className="bg-gray-500 p-4" type="text" ref={inputRef}  onChange={handlevalue} />
    </div>
  );
};

export default Toggle;