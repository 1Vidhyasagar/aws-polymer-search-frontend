import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import SearchBar from "./SearchBar"; 
import SearchResults from "./SearchResults"; 
import SearchChart from "./SearchChart"; 
import { useAuth } from "../context/AuthContext";

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

    if (!query.trim()) {
      setMessage("Search query cannot be empty.");
      setSearchResults([]);
      return;
    }

    try {
      const { searchPolymer } = await import("../services/api");
      const results = await searchPolymer(query);
      if (results.length === 0) {
        setMessage("No results found.");
      } else {
        setMessage("");
      }
      setSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
      setMessage("An error occurred while searching.");
    }
  };

  return (
    <Box sx={{ padding: "1rem", textAlign: "center" }}>
      {/* Always visible heading */}
      <Typography
        variant="h6"
        component="h2"
        sx={{ mb: 3, color: "#1976d2", fontWeight: "bold" }}
      >
        Welcome to AWS Polymer
      </Typography>

      <SearchBar onSearch={handleSearch} />

      {/* Show message if there is any */}
      {message && (
        <Typography color="error" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}

      {/* Results and Charts */}
      {searchResults.length > 0 && (
        <>
          <SearchResults results={searchResults} />
          <SearchChart data={searchResults} />
        </>
      )}
    </Box>
  );
};

export default Dashboard;
