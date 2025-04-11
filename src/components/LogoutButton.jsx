import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Redirect to login
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={handleLogout}
      sx={{ ml: 2 }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
