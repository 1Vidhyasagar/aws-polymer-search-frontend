import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CssBaseline,
} from "@mui/material";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://aws-polymer-search-backend-1.onrender.com/api/auth/register",
        form
      );

      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#f5f5f5"
      >
        <Container maxWidth="xs">
          <Box p={4} boxShadow={3} borderRadius={2} bgcolor="white">
            <Typography variant="h5" align="center" gutterBottom>
              Register
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              {message && (
                <Box mt={2}>
                  <Alert
                    severity={
                      message.includes("successful") ? "success" : "error"
                    }
                  >
                    {message}
                  </Alert>
                </Box>
              )}
              <Box mt={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Register
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Register;
