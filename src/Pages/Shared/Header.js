import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-5 pb-2">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <NavLink
                className="text-decoration-none fw-bolder me-5"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none fw-bolder me-5"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none fw-bolder me-5"
                to="/login"
              >
                Login
              </NavLink>
              {/* Username */}
              <a href="#login">mark otto</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
