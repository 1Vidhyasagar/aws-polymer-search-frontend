import React, { useState } from "react";
import { Typography, Box, Container } from "@mui/material";
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
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Box
          p={4}
          sx={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Welcome to AWS Polymer
          </Typography>

          <SearchBar onSearch={handleSearch} />

          {message && (
            <Typography color="error" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}

          {searchResults.length > 0 && (
            <>
              <SearchResults results={searchResults} />
              <SearchChart data={searchResults} />
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
