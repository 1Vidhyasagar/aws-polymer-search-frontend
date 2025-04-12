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
        backgroundColor: "#f5f5f5",
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
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ minWidth: "120px" }}
        >
          Search
        </Button>
      </Box>
    </Paper>
  );
};

export default SearchBar;
