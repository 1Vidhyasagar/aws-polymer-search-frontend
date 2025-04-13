import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      className="shadow-sm"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#ffffff",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          AWS Polymer Search
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            style={{ gap: "10px", alignItems: "center" }}
          >
            {!isAuthenticated ? (
              <>
                <Nav.Link href="/login" style={{ color: "#fff" }}>
                  Login
                </Nav.Link>
                <Nav.Link href="/register" style={{ color: "#fff" }}>
                  Sign Up
                </Nav.Link>
              </>
            ) : (
              <Button
                variant="outline-light"
                style={{
                  fontWeight: "500",
                  padding: "6px 12px",
                  border: "1px solid white",
                  color: "#fff",
                  backdropFilter: "blur(3px)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
