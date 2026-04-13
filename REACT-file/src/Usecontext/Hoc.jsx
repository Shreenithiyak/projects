import { useState } from "react";

const Hoc = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loginForm, setLoginForm] = useState({
    email: "admin@.com",
    password: "40213"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // store in localStorage
    localStorage.setItem("user", JSON.stringify(form));

    alert("User Registered!");
  };
    const handle = (e) => {
     setLoginForm({
        ...loginForm,[e.target.name]:e.target.value
     })
    };

const handleclick =(e)=>{
    e.preventDefault();
    const user = localStorage.getItem("user");
    if (user === JSON.stringify(loginForm)) {
      alert("Login Success");
    } else {
      alert("Invalid Credentials");
    }
}
  return (
    <>
    <div className="p-10 flex flex-col gap-10 items-center justify-center">
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-10 border-2 rounded-md shadow-md">
        <input name="name" onChange={handleChange} placeholder="Name" className="border-2 p-2 rounded-md w-full" />
        <input name="email" onChange={handleChange} placeholder="Email" className="border-2 p-2 rounded-md w-full" />
        <input name="password" onChange={handleChange} placeholder="Password" className="border-2 p-2 rounded-md w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Register</button>
      </form> 
       </div>
       <div className="max-w-sm mx-auto bg-pink-200 rounded-lg shadow-md p-6 ">
      <form onSubmit={handleclick}>
        <input name="email" onChange={handle} placeholder="Email" className="border-2 p-2 rounded-md w-full" />
        <input name="password"onChange={handle} placeholder="Password" className="border-2 p-2 rounded-md w-full" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
      </div>
      </div>
   </>
  );
};

export default Hoc;









