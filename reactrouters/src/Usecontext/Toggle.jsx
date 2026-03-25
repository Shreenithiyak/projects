import { useContext } from "react";
import Create from "./Create";

const Toggle = () => {
  const { lang, setTextChange } = useContext(lang);
  //const [currentLang, setCurrentLang] = useState(lang);

  const handleClick = () => {
   // setCurrentLang(currentLang === "EN" ? "TA" : "EN");
    setTextChange(setTextChange === "EN" ? "TA" : "EN");
  };

  return (
    <div>
      <h1>{setTextChange=== "EN" ? "Hello" : "Vanakkam"}</h1>

      <button onClick={handleClick}>
        Switch Language
      </button>
    </div>
  );
};

export default Toggle;
