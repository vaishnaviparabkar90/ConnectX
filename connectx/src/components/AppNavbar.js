import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AppNavbar = () => {
  return(
  <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/" className="fw-bold fs-2">
      Connect<span className="text-primary">X</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/register">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};



export default AppNavbar;
