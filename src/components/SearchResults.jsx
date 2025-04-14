import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Pagination,
} from "@mui/material";

const ITEMS_PER_PAGE = 5;

const SearchResults = ({ results }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedResults = results.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
        Search Results
      </Typography>
      <Grid container spacing={2}>
        {paginatedResults.map((result, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {result.title}
                </Typography>
                <Typography variant="body2">{result.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default SearchResults;
