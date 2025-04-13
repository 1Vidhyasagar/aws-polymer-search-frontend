import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material/styles"; // <-- ADD THIS
import CssBaseline from "@mui/material/CssBaseline"; // <-- OPTIONAL, RESETS STYLING
import theme from "./theme"; // <-- Your custom theme file
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'; // or './App.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
