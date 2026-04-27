import { useContext, useReducer, useState, lazy, Suspense } from "react";
import { cartInitialState, cartReducer } from "./cartContext";
import { AuthContext } from "./authContext";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";

// ==================== THEME CONTEXT (Task 1) ====================
import { createContext } from "react";
const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
    default: return state;
  }
};

const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [state, dispatch] = useReducer(themeReducer, { mode: savedTheme });
  
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  
  // Save to localStorage
  localStorage.setItem('theme', state.mode);
  
  return (
    <ThemeContext.Provider value={{ theme: state.mode, toggleTheme }}>
      <div className={state.mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// ...existing code...

// ==================== AUTH CONTEXT + REDUCER (Task 3) ====================
// ...existing code...

// const authInitialState = { user: null, isLoggedIn: false };
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': return { user: action.payload, isLoggedIn: true };
    case 'LOGOUT': return { user: null, isLoggedIn: false };
    default: return state;
  }
};

const AuthProvider = ({ children }) => {
  const savedUser = JSON.parse(localStorage.getItem('user')) || null;
  const [state, dispatch] = useReducer(authReducer, { user: savedUser, isLoggedIn: !!savedUser });
  
  const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };
  
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ==================== LAZY LOADED PAGES ====================
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Dashboard = lazy(() => import('./Dashboard'));

// ==================== PAGE COMPONENTS ====================
const HomePage = () => (
  <div className="p-10 text-center">
    <h1 className="text-3xl font-bold">🏠 Home Page</h1>
    <p>Welcome to the lazy loaded app!</p>
  </div>
);

const AboutPage = () => (
  <div className="p-10 text-center">
    <h1 className="text-3xl font-bold">ℹ️ About Page</h1>
    <p>This page is loaded on demand!</p>
  </div>
);

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  const [newItem, setNewItem] = useState({ name: '', price: '' });
  
  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      cartDispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), name: newItem.name, price: parseFloat(newItem.price) } });
      setNewItem({ name: '', price: '' });
    }
  };
  
  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📊 Dashboard</h1>
        <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      </div>
      <p className="mb-4">Welcome, <strong>{user?.name}</strong>!</p>
      
      {/* Cart System */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-bold mb-4">🛒 Cart System</h2>
        <div className="flex gap-2 mb-4">
          <input type="text" placeholder="Item name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} className="border p-2 rounded" />
          <input type="number" placeholder="Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} className="border p-2 rounded w-24" />
          <button onClick={handleAddItem} className="px-4 py-2 bg-green-500 text-white rounded">Add</button>
          <button onClick={() => cartDispatch({ type: 'CLEAR_CART' })} className="px-4 py-2 bg-gray-500 text-white rounded">Clear</button>
        </div>
        <ul className="mb-4">
          {cartState.items.map((item, index) => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => cartDispatch({ type: 'REMOVE_ITEM', payload: index })} className="px-2 py-1 bg-red-500 text-white rounded text-sm">Remove</button>
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold">Total: ${cartState.totalPrice}</p>
        <p className="text-sm text-gray-500">Cart Count: {cartState.items.length}</p>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login({ name });
      navigate('/dashboard');
    }
  };
  
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">🔐 Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm mx-auto">
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

// ==================== PROTECTED ROUTE ====================
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

// ==================== MAIN APP ====================
const LazyLoading = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex gap-4">
          <Link to="/home" className="hover:text-green-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/dashboard" className="hover:text-green-400">Dashboard</Link>
        </div>
        <button onClick={toggleTheme} className="px-4 py-2 bg-yellow-500 text-black rounded">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
      
      {/* Routes with Suspense */}
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

// ==================== ROOT APP ====================
const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LazyLoading />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;