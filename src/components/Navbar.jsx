import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar1.css"

function Navbar1() {
  return (
    <Container>
    <div className="Navbar mt-2 mb-2">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="text-primary fw-bold" href="/"> <strong>Hackflix</strong> </Navbar.Brand>
          <Nav className="justify-content-end links">
            <NavLink to="/" className="text-primary fw-bold navlink">Home</NavLink>
            <NavLink className="text-light mx-3  navlink" to="/about">About</NavLink>
            <NavLink className="text-light navlink" to="/contact">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </Container>
  );
}

export default Navbar1;
