import React, { createContext, useContext, useReducer, useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

/* ================= THEME CONTEXT ================= */
const ThemeContext = createContext();

const themeReducer = (state, action) => {
  if (action.type === "TOGGLE_THEME") {
    return state === "light" ? "dark" : "light";
  }
  return state;
};

const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
      }}
    >
      <div className={theme === "dark" ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

/* ================= AUTH CONTEXT ================= */
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/* ================= PAGES ================= */

const Home = () => (
  <h1 className="text-2xl p-5">🏠 Home Page</h1>
);

const About = () => (
  <h1 className="text-2xl p-5">ℹ️ About Page</h1>
);

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name) {
      login(name);
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 ml-2">
        Login
      </button>
    </div>
  );
};

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (item) {
      setCart([...cart, item]);
      setItem("");
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl">Welcome {user?.name}</h1>

      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 my-3">
        Logout
      </button>

      <div>
        <input
          type="text"
          placeholder="Add Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="border p-2"
        />

        <button onClick={addItem} className="bg-green-500 text-white px-4 py-2 ml-2">
          Add
        </button>
      </div>

      <ul className="mt-4">
        {cart.map((product, index) => (
          <li key={index}>
            {product}
            <button
              onClick={() => removeItem(index)}
              className="bg-red-400 text-white px-2 ml-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ================= PROTECTED ROUTE ================= */

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" />;
};

/* ================= MAIN APP ================= */

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>

        <button onClick={toggleTheme} className="ml-auto bg-yellow-400 px-3 text-black">
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

/* ================= ROOT APP ================= */

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}