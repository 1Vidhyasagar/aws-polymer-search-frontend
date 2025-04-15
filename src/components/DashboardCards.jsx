import React, { useState, useMemo } from "react";
import {
  Typography,
  Box,
  CircularProgress,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SearchChart from "./SearchChart";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useAuth();

  const handleSearch = async (query) => {
    if (!token) {
      const msg = "Please login to use the search feature.";
      toast.error(msg);
      setMessage(msg);
      setSearchResults([]);
      return;
    }

    if (!query.trim()) {
      const msg = "Search query cannot be empty.";
      toast.warning(msg);
      setMessage(msg);
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const { searchPolymer } = await import("../services/api");
      const results = await searchPolymer(query);

      if (results.length === 0) {
        const msg = "No results found.";
        toast.info(msg);
        setMessage(msg);
        setSearchResults([]);
      } else {
        toast.success("Results loaded successfully!");
        setSearchResults(results);
      }
    } catch (err) {
      console.error("Search error:", err);
      const msg = "Something went wrong while fetching search results.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const totalCount = searchResults.length;

  const topPolymers = useMemo(() => {
    const countMap = {};
    searchResults.forEach((item) => {
      const name = item.polymer || "Unknown";
      countMap[name] = (countMap[name] || 0) + 1;
    });

    return Object.entries(countMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([name, count]) => ({ name, count }));
  }, [searchResults]);

  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundSize: "cover",
        py: { xs: 4, sm: 6, md: 8 },
        px: 2,
      }}
    >
      {/* 🔥 Header */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "white", mb: 3 }}
      >
        AWS Polymer Search Dashboard
      </Typography>

      {/* 🔍 Search */}
      <SearchBar onSearch={handleSearch} />
      <Box
        maxWidth="1000px"
        width="100%"
        mx="auto"
        p={{ xs: 3, sm: 4 }}
        sx={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
        }}
      >
        {/* ⏳ Loading */}
        {loading && (
          <Box mt={4} textAlign="center">
            <CircularProgress color="inherit" />
            <Typography color="white" mt={2}>
              Searching...
            </Typography>
          </Box>
        )}

        {/* ⚠️ Message / Error */}
        {!loading && (message || error) && (
          <Typography
            color={error ? "error.main" : "warning.main"}
            sx={{ mt: 3, textAlign: "center" }}
          >
            {error || message}
          </Typography>
        )}

        {/* 🧊 Results Container (Fixed space to avoid shifting layout) */}
        <Box
          mt={5}
          sx={{
            minHeight: "600px", // reserve space even before search
            transition: "all 0.3s ease",
          }}
        >
          {searchResults.length > 0 && !loading && (
            <Box>
              {/* 🔽 Results */}
              <Box mb={6}>
                <SearchResults results={searchResults} />
              </Box>

              {/* 📊 Chart */}
              <Box mb={6}>
                <SearchChart data={searchResults} />
              </Box>

              {/* 🧠 Insights */}
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Search Insights
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <Card
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "16px",
                        height: "100%",
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          color="white"
                          gutterBottom
                        >
                          Total Results
                        </Typography>
                        <Typography
                          variant="h5"
                          color="white"
                          fontWeight="bold"
                        >
                          {totalCount}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <Card
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "16px",
                        height: "100%",
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          color="white"
                          gutterBottom
                        >
                          Top Polymers
                        </Typography>
                        {topPolymers.map((polymer, index) => (
                          <Typography key={index} color="white">
                            {index + 1}. {polymer.name} — {polymer.count}{" "}
                            result(s)
                          </Typography>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
