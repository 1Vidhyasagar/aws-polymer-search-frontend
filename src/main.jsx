import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // assuming you have this
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // your theme file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
 <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
