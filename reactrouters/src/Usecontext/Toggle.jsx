import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Create from "./Create";

const Toggle = () => {
  const { lang, setLang, role, setRole } = useContext(Create);
  const navigate = useNavigate();

  const handleRole = () => {
    const newRole = role === "admin" ? "user" : "admin";
    setRole(newRole);

    // navigate based on role
    if (newRole === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      
      <h1 className="text-2xl font-bold">
        {lang === "EN" ? "Hello" : "Vanakkam"}
      </h1>

      {/* Language Button */}
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        onClick={() => setLang(lang === "EN" ? "TA" : "EN")}
      >
        Switch Language
      </button>

      {/* Role Button */}
      <button
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        onClick={handleRole}
      >
        Switch Role
      </button>

    </div>
  );
};

export default Toggle;