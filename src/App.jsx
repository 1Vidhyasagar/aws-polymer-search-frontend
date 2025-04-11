import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import DashboardCards from "./components/DashboardCards";
import SearchChart from "./components/SearchChart";
import LogoutButton from "./components/LogoutButton";
import Login from "./components/pages/Login"; // or /pages/Login
import Register from "./components/pages/Register"; // if you have it
import { useAuth } from "./context/AuthContext";

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState("");
  const { token } = useAuth();

  const handleSearch = async (query) => {
    if (!token) {
      setMessage("Please login to use the search feature.");
      setSearchResults([]);
      return;
    }

    const { searchPolymer } = await import("./services/api");
    const results = await searchPolymer(query);
    setSearchResults(results);
    setMessage("");
  };

  return (
    <div style={{ padding: "10px" }}>
      <SearchBar onSearch={handleSearch} />
      {message && <p style={{ color: "red" }}>{message}</p>}
      <SearchResults results={searchResults} />
      {searchResults.length > 0 && (
        <>
          <DashboardCards results={searchResults} />
          <SearchChart data={searchResults} />
        </>
      )}
    </div>
  );
};

const App = () => {
  const { token } = useAuth();

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
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
