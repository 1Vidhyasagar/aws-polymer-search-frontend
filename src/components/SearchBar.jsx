import React, { useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError(true);
      return;
    }

    setError(false);
    onSearch(trimmedQuery);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        maxWidth: 600,
        margin: "30px auto",
        background: "rgba(255, 255, 255, 0.1)", // Glassmorphism Background
        backdropFilter: "blur(10px)", // Blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari
        borderRadius: "12px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255, 255, 255, 0.2)", // Light border for glass effect
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        gap={2}
      >
        <TextField
          fullWidth
          label="Search AWS Polymer"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          error={error}
          helperText={error ? "Please enter a search term" : ""}
          sx={{
            input: {
              color: "#fff", // White text color
            },
            "& .MuiInputLabel-root": {
              color: "#fff", // White label text
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.2)", // Light border for input
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)", // Hover effect border color
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            minWidth: "120px",
            backdropFilter: "blur(5px)", // Adding a blur effect to button as well
            background: "rgba(25, 118, 210, 0.8)", // Slightly transparent button background
            color: "#fff", // White text on button
            "&:hover": {
              background: "rgba(25, 118, 210, 1)", // Solid background on hover
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Paper>
  );
};

export default SearchBar;
