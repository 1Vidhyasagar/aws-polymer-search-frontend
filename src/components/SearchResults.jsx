import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return (
      <Box mt={4} textAlign="center">
        <Typography variant="h6" color="textSecondary">
          No results to display.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2} mt={2}>
      {results.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {item.title || "Untitled Result"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description || "No description available."}
              </Typography>
              {/* Add more fields here if needed */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResults;
