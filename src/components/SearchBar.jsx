import React, { useState } from "react";
import { Box, TextField, Button, Paper, CircularProgress } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);
    await onSearch(trimmedQuery);
    setLoading(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        maxWidth: 600,
        margin: "30px auto",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
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
            input: { color: "#fff" },
            "& .MuiInputLabel-root": { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
              "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
            },
          }}
        />
        <Box position="relative" width={{ xs: "100%", sm: "auto" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth={true}
            disabled={loading}
            sx={{
              minWidth: "120px",
              backdropFilter: "blur(5px)",
              background: "rgba(25, 118, 210, 0.8)",
              color: "#fff",
              "&:hover": {
                background: "rgba(25, 118, 210, 1)",
              },
            }}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchBar;
