import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 10,
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        borderRadius: "10px",
        padding: "0.5rem",
      }}
    >
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleLogout}
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderColor: "white",
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default LogoutButton;
