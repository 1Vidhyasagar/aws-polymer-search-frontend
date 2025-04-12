import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { useAuth } from "./context/AuthContext";
import Dashboard from "./components/DashboardCards";

const App = () => {
  const { token } = useAuth();

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
