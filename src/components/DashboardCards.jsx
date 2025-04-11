import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";


const DashboardCards = ({ results }) => {
  const totalResults = results.length;
  const topTitle =
    results.reduce((longest, curr) =>
      curr.title?.length > longest.length ? curr.title : longest,
    "") || "N/A";

  return (
    <Grid container spacing={2} style={{ marginTop: "20px" }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: "#f5f5f5" }}>
          <CardContent>
            <Typography variant="h6">Total Results</Typography>
            <Typography variant="h4">{totalResults}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={8}>
        <Card sx={{ backgroundColor: "#e3f2fd" }}>
          <CardContent>
            <Typography variant="h6">Top Result Title</Typography>
            <Typography variant="body1">{topTitle}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardCards;
