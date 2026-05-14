import React from "react";
import { Routes, Route, useNavigate, useLocation, Outlet, Link, Navigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Simulate login logic
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
    </div>
  );
}

function DashboardLayout() {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/profile">Profile</Link>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

function DashboardHome() {
  return <h2 className="text-2xl font-bold">Dashboard Home</h2>;
}

// Profile Page
function Profile() {
  const location = useLocation();
  return (
    <div>
      <h2 className="text-2xl font-bold">Profile Page</h2>
      <p>Current path: {location.pathname}</p>
    </div>
  );
}

function RedirectRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RedirectRoute;
