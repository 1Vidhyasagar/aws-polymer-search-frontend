import React, { useState } from "react";
import { TextField, Button, Box, Paper } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      p={2}
      mt={4}
      mb={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <TextField
        label="Search AWS Polymer"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
